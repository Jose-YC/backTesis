import { RolEntity } from "../../Rol";
import { PaginateDtos } from "../../shared/domain/dto/pagination.dtos";
import { URLEntity } from "../../Url";
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

export interface GetAllURLUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<URLEntity>>
}

export interface GetAllIdURLUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<URLEntity>>
}

export interface GetAllUserUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<UserEntity>>
}
