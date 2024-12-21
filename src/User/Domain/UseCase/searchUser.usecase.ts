import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { UserEntity, UserRepository } from "../";
import { UseCasePaginate, PaginateResponse } from "../../../Types/Pagination/pagination.type";


export class SearchUser implements UseCasePaginate<UserEntity, PaginateDtos> {
    
    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<UserEntity>>{
        return this.repository.getSearch(dtos);
    }
}