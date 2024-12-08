import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { StockItemsProductDtos } from "../../Domain";
import { DetalleProductMeasuresDatasource } from "../../Domain/datasource/product.measures.datasource";
import { CreateDetalleProductMeasuresDtos } from "../../Domain/dtos/create.product.measures.dtos";
import { UpdateDetalleProductMeasuresDtos } from "../../Domain/dtos/update.product.measures.dtos";
import { DetalleProductMeasuresEntity } from "../../Domain/Entity/product.measures.entity";
import { DetalleProductMeasuresRepository } from "../../Domain/repositories/product.measures.repository";



export class DetalleProductMeasuresRepositoryImp implements DetalleProductMeasuresRepository {

    constructor(
        private readonly datasource:DetalleProductMeasuresDatasource,
    ){}

    create(createDetalleProductMeasures: CreateDetalleProductMeasuresDtos): Promise<Boolean> {
       return this.datasource.create(createDetalleProductMeasures);
    }

    getId(product_id: number, category_id: number): Promise<DetalleProductMeasuresEntity> {
        return this.datasource.getId(product_id, category_id);
    }
    update(updateDetalleProductMeasures: UpdateDetalleProductMeasuresDtos): Promise<Boolean> {
        return this.datasource.update(updateDetalleProductMeasures);
    }
    incrementStock(productStock:StockItemsProductDtos): Promise<Boolean> {
        return this.datasource.incrementStock(productStock);
    }
    decrementStock(productStock:StockItemsProductDtos): Promise<Boolean> {
        return this.datasource.decrementStock(productStock);
    }

}