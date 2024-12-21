import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { RolEntity, RolRepository } from "../";
import { UseCasePaginate, PaginateResponse } from "../../../Types/Pagination/pagination.type";


export class SearchRol implements UseCasePaginate<RolEntity, PaginateDtos> {
    
    constructor(
        private readonly repository:RolRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<RolEntity>>{
        return this.repository.getSearch(dtos);
    }
}