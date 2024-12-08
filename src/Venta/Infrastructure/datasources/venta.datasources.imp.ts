import { PDFPrinter } from "../../../config/printer.adapter";
import { DetalleProductMeasuresDatasourcesImp } from "../../../Product_Measures";
import { VentaStructure } from "../../../Reports";
import { prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types";
import { CreateVentaDtos, DashboardDtos, VentaDatasource, VentaEntity, VentaEntityDtos } from "../../Domain";



export class VentaDatasourcesImp implements VentaDatasource {

    constructor(
        private readonly productRepository:DetalleProductMeasuresDatasourcesImp,
        private readonly printer: PDFPrinter
    ){}

    async create(createVenta: CreateVentaDtos): Promise<Boolean> {
        const products = await this.productRepository.ValidateProduct(createVenta.itemsVenta.map(object => object.id));
        
        const itemsInVenta  = createVenta.itemsVenta.reduce((acc, ventaItem) => {
            return acc + (ventaItem.quantity);
        }, 0);

        const subTotal = createVenta.itemsVenta.reduce((acc, ventaItem) => {
            const item = products.find(product => product.id === ventaItem.id);
            return acc + ((item!.price + item!.income) * (ventaItem.quantity));
        }, 0);

        const tax = 0.18 * subTotal

        const total = subTotal + tax
        
        const sale = await prisma.venta.create({
            data: {
                subTotal,
                total,
                itemsInVenta,
                tax,
                type: createVenta!.type,
                type_payment: createVenta!.type_payment,
                client_id: createVenta!.client_id,
                ventaItem: {createMany:{ data : createVenta!.itemsVenta.map(object => ({
                    mesures_id: products.find(product => product.id === object.id)!.measures_id,
                    product_id: products.find(product => product.id === object.id)!.product_id,
                    price: products.find(product => product.id === object.id)!.price,
                    income: products.find(product => product.id === object.id)!.income,
                    quantity: object.quantity
                }))}},    
            }
        });

        return !!sale;
    }
    async getAll(dtos:PaginateDtos): Promise<PaginateResponse<VentaEntity>> {
        const skip = (dtos.page - 1) * dtos.lim;
        const [total, sales] = await Promise.all([
            prisma.venta.count(),
            prisma.venta.findMany({
                include: {
                    client: true
                },
                skip, take:dtos.lim
            }),
        ]);

        return {total, data:sales.map(order => VentaEntity.fromObject(order))};
    }
    async getSearch(dtos:PaginateDtos): Promise<PaginateResponse<VentaEntity>> {
        const skip = dtos.page > 0 ? (dtos.page - 1) * dtos.lim : 0;
        const [total, orders] = await Promise.all([
            prisma.venta.count({
               
            }),
            prisma.venta.findMany({
                
                skip,
                take: dtos.page > 0 ? dtos.lim : undefined
                 }),
        ]);

          return {total, data:orders.map(order => VentaEntity.fromObject(order))};
    }
    async getId(id: number): Promise<VentaEntity> {
        const sale = await prisma.venta.findFirst({
            where: { id },
            include: {
                client: true
            },
        });

        if (!sale) throw `Sale not found`;
        return VentaEntity.fromObject(sale);
    }
    async getIdDetails(id: number): Promise<VentaEntityDtos> {
        const sale = await prisma.venta.findFirst({
            where: { id },
            include: {
                client: true,
                ventaItem: {
                    include: {
                        measure: true,
                        product: true,
                    }
                }
            },
        });

        if (!sale) throw `Sale not found`;
        return VentaEntityDtos.fromObject(sale);
    }

    async getPdf(id: number): Promise<PDFKit.PDFDocument> {
        const sale = await this.getIdDetails(id)
        const pdfDoc = VentaStructure(sale)
        const pdf = this.printer.generated(pdfDoc);
        return pdf;
     }


    async getTotalMonth(startDate: Date, endDate: Date): Promise<DashboardDtos[]> {
        if (startDate >= endDate) throw ('Start date must be before end date');
        
        const salesByMonth = (await prisma.$queryRaw`
        WITH month_order AS (
        SELECT 
            EXTRACT(YEAR FROM "createdAt") AS year,
            TO_CHAR(DATE_TRUNC('month', "createdAt"), 'TMMonth') AS month,
            COALESCE(ROUND(SUM("total")::numeric, 2), 0) AS total,
            DATE_TRUNC('month', "createdAt") AS month_sort
        FROM "Venta"
        WHERE 
            "createdAt" >= ${startDate} AND "createdAt" <= ${endDate}
        GROUP BY 
            year,
            month,
            month_sort
        )
        SELECT 
        year,
        month,
        total
        FROM month_order
        ORDER BY 
        year ASC, 
        month_sort ASC;
      `)  as Array<{
            year: number;
            month: string;
            total: number;
        }>;

        if (!salesByMonth) return [];
        return salesByMonth.map((obj) => DashboardDtos.fromObject(obj));
    }
    async getTotalDay(startDate: Date, endDate: Date): Promise<DashboardDtos[]> {

        if (startDate >= endDate) throw ('Start date must be before end date');
        
        const salesByMonth = (await prisma.$queryRaw`
        SELECT 
          EXTRACT(YEAR FROM "createdAt") AS year,
          EXTRACT(MONTH FROM "createdAt") AS month,
          EXTRACT(DAY FROM "createdAt") AS day, 
          COALESCE(ROUND(SUM("total")::numeric, 2), 0) AS total
        FROM "Venta"
        WHERE 
          "createdAt" >= ${startDate} AND "createdAt" <= ${endDate}
        GROUP BY year, month, day
        ORDER BY year, month, day;
        `) as Array<{
            year: number;
            month: number;
            day: number;
            total: number;
        }>;

        if (!salesByMonth) return [];
        return salesByMonth.map((obj) => DashboardDtos.fromObject(obj));
    }
    async getQuantitySaleDay(startDate: Date, endDate: Date): Promise<DashboardDtos[]> {
        if (startDate >= endDate) throw new Error('Start date must be before end date');
        
        const salesQuantity = (await prisma.$queryRaw`
            SELECT 
                EXTRACT(YEAR FROM "createdAt") AS year,
                EXTRACT(MONTH FROM "createdAt") AS month,
                EXTRACT(DAY FROM "createdAt") AS day, 
                COUNT(*) AS total
            FROM "Venta"
            WHERE 
                "createdAt" >= ${startDate} AND "createdAt" <= ${endDate}
            GROUP BY year, month, day
            ORDER BY year, month, day;
        `)as Array<{
            year: number;
            month: number;
            day: number;
            total: number;
        }>;
        if (!salesQuantity) return [];
    
        return salesQuantity.map((obj) => DashboardDtos.fromObject(obj));
    }

}