import { CreateURLDtos, UpdateURLDtos, URLEntity } from "../../Url";

export interface CreateURLUseCase {
    execute(dto:CreateURLDtos):Promise<String>
}

export interface DeleteURLUseCase {
    execute(id:number):Promise<Boolean>
}

export interface GetByIdURLUseCase {
    execute(id:number):Promise<URLEntity>
}

export interface UpdateURLUseCase {
    execute(dtos:UpdateURLDtos):Promise<Boolean>
}