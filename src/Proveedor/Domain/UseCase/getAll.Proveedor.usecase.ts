import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { UseCasePaginate, PaginateResponse } from "../../../Types";
import { ProveedorEntity } from "../Entity/proveedor.entity";
import { ProveedorRepository } from "../repositories/proveedor.repository";

export class GetAllProveedor implements UseCasePaginate<ProveedorEntity, PaginateDtos> {
    
    constructor(
        private readonly repository:ProveedorRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<ProveedorEntity>>{
        return this.repository.getAll(dtos);
    }
    
}