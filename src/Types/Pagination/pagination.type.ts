import { ProveedorEntity } from "../../Proveedor/Domain";
import { RolEntity } from "../../Rol";
import { PaginateDtos } from "../../shared/domain/dto/pagination.dtos";
import { UserEntity } from "../../User";

export interface PaginateResponse<T> {
    next: string | null,
    prev: string | null,
    total: number,
    data: T[],
}

export interface GetAllRolUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<RolEntity>>
}


export interface GetAllProveedorUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<ProveedorEntity>>
}

export interface GetAllUserUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<UserEntity>>
}
