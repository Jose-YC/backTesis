import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { UserEntity, UserRepository } from "../";
import { GetAllUserUseCase, PaginateResponse } from "../../../Types/Pagination/pagination.type";

export class GetAllUser implements GetAllUserUseCase {
    
    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<UserEntity>>{
        return this.repository.getAll(dtos);
    }
    
}