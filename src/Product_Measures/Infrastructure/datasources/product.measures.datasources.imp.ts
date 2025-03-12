
import { Prisma, PrismaClient } from "@prisma/client";
import { CustomError, prisma } from "../../../Server";
import { StockItemsProductDtos, DetalleProductMeasuresDatasource, 
         CreateDetalleProductMeasuresDtos, DetalleProductMeasuresEntityDtos, 
         UpdateDetalleProductMeasuresDtos, DetalleProductMeasuresEntity
       } from "../../Domain";
import { DefaultArgs } from "@prisma/client/runtime/library";

export class DetalleProductMeasuresDatasourcesImp implements DetalleProductMeasuresDatasource {

    async create(createDetalleProductMeasuresDtos: CreateDetalleProductMeasuresDtos): Promise<Boolean> {
        const detalleProductMeasures = await prisma.itemsMeasures.create({data: createDetalleProductMeasuresDtos!})
        return !!detalleProductMeasures;
    }

    async getId(product_id: number, measures_id: number): Promise<DetalleProductMeasuresEntity> {
        const measure = await prisma.itemsMeasures.findFirst({
            where:{ measures_id, product_id },
            include: {
                measures: true, 
            },
        });
        if (!measure) throw CustomError.badRequest('Medidas no encontradas');
        return DetalleProductMeasuresEntity.fromObject(measure);
    }

    async update(updateDetalleProductMeasuresDtos: UpdateDetalleProductMeasuresDtos): Promise<Boolean> {
        await this.getId(updateDetalleProductMeasuresDtos.product_id, updateDetalleProductMeasuresDtos.measures_id);
        const detalleProductMeasures = await prisma.itemsMeasures.updateMany({
            where: {
               product_id: updateDetalleProductMeasuresDtos.product_id,
               measures_id: updateDetalleProductMeasuresDtos.measures_id
            }, 
            data: updateDetalleProductMeasuresDtos!.values
        });

        return !!detalleProductMeasures;
    }

    async incrementStock(
        productStock: StockItemsProductDtos,
        clientprisma: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>, 
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | 
        "$extends"> 
        | PrismaClient  = prisma): Promise<Boolean> {

        const product = await clientprisma.itemsMeasures.update({
            where: { 
                items_id : {
                    measures_id: productStock.measures_id,
                    product_id: productStock.product_id, 
                }
            },
            data: { stock: { increment: productStock.stock } }
          });
        return !!product;
    }

    async decrementStock(
        productStock: StockItemsProductDtos, 
        clientprisma: Omit<
        PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>, 
        "$connect" | "$disconnect" | "$on" | "$transaction" | "$use" | 
        "$extends"> 
        | PrismaClient = prisma ): Promise<Boolean> {

        const veri = await clientprisma.itemsMeasures.findFirst({ where: { product_id: productStock.product_id,  measures_id: productStock.measures_id } });

        if (!veri) throw CustomError.badRequest('Producto no encontrado');
        if ( productStock.stock > veri.stock) throw CustomError.badRequest('Stock insuficiente');


        const product = await clientprisma.itemsMeasures.update({
            where: { 
                items_id : {
                    product_id: productStock.product_id, 
                    measures_id: productStock.measures_id 
                }
            },
            data: { stock: { decrement: productStock.stock } }
          });

        return !!product;
    }

    async ValidateProduct(ids: number[]): Promise<DetalleProductMeasuresEntityDtos[]> {
        ids = Array.from(new Set(ids));
        const products = await prisma.itemsMeasures.findMany({ where: { id: {in: ids} }});
        if (products.length !== ids.length) throw CustomError.badRequest('Algunos productos no fueron encontrados');
        
        return products.map((measure) => DetalleProductMeasuresEntityDtos.fromObject(measure));
    }

}