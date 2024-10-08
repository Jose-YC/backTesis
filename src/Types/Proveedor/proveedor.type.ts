import { CreateProveedorDtos, ProveedorEntity, UpdateProveedorDtos } from "../../Proveedor/Domain"

export interface UpdateProveedorUseCase {
    execute(dtos:UpdateProveedorDtos):Promise<Boolean>
}

export interface CreateProveedorUseCase {
    execute(dto:CreateProveedorDtos):Promise<Boolean>
}


export interface GetByIdProveedorUseCase {
    execute(id:number):Promise<ProveedorEntity>
}

export interface DeleteProveedorUseCase {
    execute(id:number):Promise<Boolean>
}