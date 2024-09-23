import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { CreateRolDtos, UpdateRolDtos, RolEntity } from "../";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";

export abstract class RolDatasource {
    
    abstract create(createRol:CreateRolDtos):Promise<Boolean>;
    abstract getAll(dtos:PaginateDtos):Promise<PaginateResponse<RolEntity>>;
    abstract getSearch(dtos:PaginateDtos):Promise<PaginateResponse<RolEntity>>;
    abstract getId(id:number):Promise<RolEntity>;
    abstract update(updateRol:UpdateRolDtos):Promise<Boolean>;
    abstract delete(id:number):Promise<Boolean>;
}