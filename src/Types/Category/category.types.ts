import { CategoryEntity, CreateCategoryDtos, UpdateCategoryDtos } from "../../Category"

export interface UpdateCategoryUseCase {
    execute(dtos:UpdateCategoryDtos):Promise<Boolean>
}

export interface CreateCategoryUseCase {
    execute(dto:CreateCategoryDtos):Promise<Boolean>
}


export interface GetByIdCategoryUseCase {
    execute(id:number):Promise<CategoryEntity>
}

export interface DeleteCategoryUseCase {
    execute(id:number):Promise<Boolean>
}