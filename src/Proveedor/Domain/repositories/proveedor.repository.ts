import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateProveedorDtos } from '../dtos/create.proveedor.dtos';
import { UpdateProveedorDtos } from "../dtos/update.proveedor.dtos";
import { ProveedorEntity } from "../Entity/proveedor.entity";

export abstract class ProveedorRepository {
    
    abstract create(createProveedor:CreateProveedorDtos):Promise<Boolean>;
    abstract getAll(dtos:PaginateDtos):Promise<PaginateResponse<ProveedorEntity>>;
    abstract getSearch(dtos:PaginateDtos):Promise<PaginateResponse<ProveedorEntity>>;
    abstract getId(id:number):Promise<ProveedorEntity>;
    abstract update(updateUser:UpdateProveedorDtos):Promise<Boolean>;
    abstract delete(id:number):Promise<Boolean>;
}