import { CreateProductDtos, ProductEntity, ProductEntityDtos, UpdateProductDtos } from "../../Product"

export interface UpdateProductUseCase {
    execute(dtos:UpdateProductDtos):Promise<Boolean>
}

export interface CreateProductUseCase {
    execute(dto:CreateProductDtos):Promise<Boolean>
}

export interface GetByIdProductDtosUseCase {
    execute(id:number):Promise<ProductEntityDtos>
}

export interface GetByIdProductUseCase {
    execute(id:number):Promise<ProductEntity>
}

export interface DeleteProductUseCase {
    execute(id:number):Promise<Boolean>
}