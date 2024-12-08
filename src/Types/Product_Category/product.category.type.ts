import { CreateDetalleProductCategoryDtos, DetalleProductCategoryEntity } from "../../Product_Category"

export interface CreateDetalleProductCategoryUseCase {
    execute(dto:CreateDetalleProductCategoryDtos):Promise<Boolean>
}

export interface GetByIdDetalleProductCategoryUseCase {
    execute(category_id:number, product_id:number):Promise<DetalleProductCategoryEntity>
}

export interface DeleteDetalleProductCategoryUseCase {
    execute(category_id:number, product_id:number):Promise<Boolean>
}