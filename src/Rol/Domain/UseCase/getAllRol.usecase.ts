import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { RolEntity, RolRepository } from "../";
import { UseCasePaginate, PaginateResponse } from "../../../Types";


export class GetAllRol implements UseCasePaginate<RolEntity, PaginateDtos> {
    
    constructor(
        private readonly repository:RolRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<RolEntity>>{
        return this.repository.getAll(dtos);
    }
    
}