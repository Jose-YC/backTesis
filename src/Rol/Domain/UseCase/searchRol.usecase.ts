import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { RolEntity, RolRepository } from "../";
import { GetAllRolUseCase, PaginateResponse } from "../../../Types/Pagination/pagination.type";


export class SearchRol implements GetAllRolUseCase {
    
    constructor(
        private readonly repository:RolRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<RolEntity>>{
        return this.repository.getSearch(dtos);
    }
}