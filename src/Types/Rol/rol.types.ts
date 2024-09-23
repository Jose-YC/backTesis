import { CreateRolDtos, RolEntity, UpdateRolDtos } from "../../Rol";


export interface CreateRolUseCase {
    execute(dto:CreateRolDtos):Promise<Boolean>
}

export interface DeleteRolUseCase {
    execute(id:number):Promise<Boolean>
}

export interface GetByIdRolUseCase {
    execute(id:number):Promise<RolEntity>
}

export interface UpdateRolUseCase {
    execute(dtos:UpdateRolDtos):Promise<Boolean>
}
