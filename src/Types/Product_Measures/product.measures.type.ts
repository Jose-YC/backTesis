import { CreateDetalleProductMeasuresDtos, DetalleProductMeasuresEntity, UpdateDetalleProductMeasuresDtos } from "../../Product_Measures"
import { StockItemsProductDtos } from "../../Product_Measures/Domain"

export interface UpdateDetalleProductMeasuresUseCase {
    execute(dtos:UpdateDetalleProductMeasuresDtos):Promise<Boolean>
}

export interface IncrementStockUseCase {
    execute(dtos:StockItemsProductDtos):Promise<Boolean>
}

export interface DecrementStockUseCase {
    execute(dtos:StockItemsProductDtos):Promise<Boolean>
}

export interface CreateDetalleProductMeasuresUseCase {
    execute(dto:CreateDetalleProductMeasuresDtos):Promise<Boolean>
}


export interface GetByIdDetalleProductMeasuresUseCase {
    execute(product_id: number, measures_id: number):Promise<DetalleProductMeasuresEntity>
}

export interface DeleteDetalleProductMeasuresUseCase {
    execute(product_id: number, measures_id: number):Promise<Boolean>
}