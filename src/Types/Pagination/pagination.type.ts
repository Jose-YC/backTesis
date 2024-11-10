
import { RolEntity } from "../../Rol";
import { UserEntity } from "../../User";
import { PaginateDtos } from "../../shared/domain/dto/pagination.dtos";

export interface PaginateResponse<T> {
    total?: number,
    data: T[],
}

export interface GetAllRolUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<RolEntity>>
}

export interface GetAllCategoryUseCase {
    execute(dtos:PaginateDtos):Promise<any>
}
export interface GetAllUserUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<UserEntity>>
}
