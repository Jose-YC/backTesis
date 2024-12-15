
import { CustomError, prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { StockItemsProductDtos } from "../../Domain";
import { DetalleProductMeasuresDatasource } from "../../Domain/datasource/product.measures.datasource";
import { CreateDetalleProductMeasuresDtos } from "../../Domain/dtos/create.product.measures.dtos";
import { DetalleProductMeasuresEntityDtos } from "../../Domain/dtos/product.measures.entyti.dtos";
import { UpdateDetalleProductMeasuresDtos } from "../../Domain/dtos/update.product.measures.dtos";
import { DetalleProductMeasuresEntity } from "../../Domain/Entity/product.measures.entity";


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

    async incrementStock(productStock: StockItemsProductDtos): Promise<Boolean> {
        const product = await prisma.itemsMeasures.update({
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

    async decrementStock(productStock: StockItemsProductDtos): Promise<Boolean> {

        const veri = await prisma.itemsMeasures.findFirst({ where: { product_id: productStock.product_id,  measures_id: productStock.measures_id } });

        if (!veri) throw `product not found`;
        if ( productStock.stock > veri.stock) throw `Stock insuficiente`;


        const product = await prisma.itemsMeasures.update({
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

        const products = await prisma.itemsMeasures.findMany({
            where: {
              id: {
                in: ids
              }
            }, 
        });

        if (products.length !== ids.length) throw `Some Product were not found`;

        return products.map((measure) => DetalleProductMeasuresEntityDtos.fromObject(measure));
    }

}