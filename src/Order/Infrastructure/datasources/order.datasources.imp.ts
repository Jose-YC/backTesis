
import { PDFPrinter } from "../../../config/printer.adapter";
import { DetalleProductMeasuresDatasourcesImp } from "../../../Product_Measures";
import { OrdenStructure } from "../../../Reports";
import { CustomError, prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types";
import { CreateOrderDtos, OrderDatasource, OrderEntity, OrderEntityDtos, UpdateOrderDtos } from "../../Domain";



export class OrderDatasourcesImp implements OrderDatasource {

    constructor(
        private readonly productRepository:DetalleProductMeasuresDatasourcesImp,
        private readonly printer: PDFPrinter
    ){}


    async create(createOrder: CreateOrderDtos): Promise<Boolean> {
        const products = await this.productRepository.ValidateProduct(createOrder.itemsOrden.map(object => object.id));

        const total = createOrder.itemsOrden.reduce((acc, orderItem) => {
            const price = products.find(product => product.id === orderItem.id)!.price;
            return acc + (price * orderItem.quantity);
        }, 0);

        const itemsInOrder  = createOrder.itemsOrden.reduce((acc, orderItem) => {
            return acc + orderItem.quantity;
        }, 0);
        
        const orden = await prisma.order.create({
            data: {
                total,
                itemsInOrder,
                provedor_id: createOrder!.provedor_id,
                OrderItem: {createMany:{ data : createOrder!.itemsOrden.map(object => ({
                    mesures_id: products.find(product => product.id === object.id)!.measures_id,
                    product_id:products.find(product => product.id === object.id)!.product_id,
                    quantity: object.quantity,
                    price: products.find(product => product.id === object.id)!.price
                }))}},    
            }
        });

        return !!orden;
    }
    async getAll(dtos:PaginateDtos): Promise<PaginateResponse<OrderEntity>> {
        const skip = (dtos.page - 1) * dtos.lim;
        const [total, orders] = await Promise.all([
            prisma.order.count(),
            prisma.order.findMany({
                include: {
                    proveedor: true
                },
                skip, take:dtos.lim
            }),
        ]);

        return {total, data:orders.map(order => OrderEntity.fromObject(order))};
    }
    async getSearch(dtos:PaginateDtos): Promise<PaginateResponse<OrderEntity>> {
        const skip = dtos.page > 0 ? (dtos.page - 1) * dtos.lim : 0;
        const [total, orders] = await Promise.all([
            prisma.order.count({
               
            }),
            prisma.order.findMany({
                
                skip,
                take: dtos.page > 0 ? dtos.lim : undefined
                 }),
        ]);

          return {total, data:orders.map(order => OrderEntity.fromObject(order))};
    }
    async getId(id: number): Promise<OrderEntity> {
        const order = await prisma.order.findFirst({
            where: { id },
            include: {
                proveedor: true
            },
        });

        if (!order) throw CustomError.badRequest('Orden no encontrada');
        return OrderEntity.fromObject(order);
    }
    async getIdDetails(id: number): Promise<OrderEntityDtos> {
        const order = await prisma.order.findFirst({
            where: { id },
            include: {
                proveedor: true,
                OrderItem: {
                    include: {
                        measure: true,
                        product: true,
                    }
                }
            },
        });

        if (!order) throw CustomError.badRequest('Orden no encontrada');
        return OrderEntityDtos.fromObject(order);
    }

    async getPdf(id: number): Promise<PDFKit.PDFDocument> {
       const orden = await this.getIdDetails(id)
       const pdfDoc = OrdenStructure(orden)
       const pdf = this.printer.generated(pdfDoc);
       return pdf;
    }

    async update(updateOrderDtos: UpdateOrderDtos): Promise<Boolean> {
        await this.getId(updateOrderDtos.id);
        const order = await prisma.order.update({
            where: {id: updateOrderDtos.id}, 
            data: updateOrderDtos!.values
        });
        return !!order;
    }
    async getTotal(id: number): Promise<boolean> {
        const sale = await prisma.order.aggregate({
            where: { createdAt: {
                gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
            }},
            _sum: { total: true }
        });

        // if (!sale) throw `Sale not found`;
        return true;
    }
    async getPendingOrders(id: number): Promise<boolean> {
        const sale = await prisma.order.count({
            where: {
                state: 'PENDING',
                createdAt: {
                  gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                  lt: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)
                }
              }
            });

        console.log(sale);

        // if (!sale) throw `Sale not found`;
        return true;
    }
}