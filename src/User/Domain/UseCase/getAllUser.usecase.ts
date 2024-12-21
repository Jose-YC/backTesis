import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { UserEntity, UserRepository } from "../";
import { UseCasePaginate, PaginateResponse } from "../../../Types";

export class GetAllUser implements UseCasePaginate<UserEntity, PaginateDtos> {
    
    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<UserEntity>>{
        return this.repository.getAll(dtos);
    }
    
}