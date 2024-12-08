import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { GetAllProveedorUseCase, PaginateResponse } from "../../../Types";
import { ProveedorEntity } from "../Entity/proveedor.entity";
import { ProveedorRepository } from "../repositories/proveedor.repository";

export class GetAllProveedor implements GetAllProveedorUseCase {
    
    constructor(
        private readonly repository:ProveedorRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<ProveedorEntity>>{
        return this.repository.getAll(dtos);
    }
    
}