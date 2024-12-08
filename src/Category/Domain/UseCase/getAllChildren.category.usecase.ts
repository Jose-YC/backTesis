import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { GetAllCategoryUseCase, PaginateResponse } from "../../../Types";
import { CategoryEntity } from "../Entity/category.entity";
import { CategoryRepository } from "../repositories/category.repository";

export class GetAllChildrenCategory implements GetAllCategoryUseCase {
    
    constructor(
        private readonly repository:CategoryRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<any>{
        return this.repository.getAllChildren(dtos);
    }
    
}