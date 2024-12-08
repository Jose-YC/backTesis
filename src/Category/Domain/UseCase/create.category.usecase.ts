import { CreateCategoryUseCase } from "../../../Types";
import { CreateCategoryDtos } from "../dtos/create.category.dtos";
import { CategoryRepository } from "../repositories/category.repository";



export class CreateCategory implements CreateCategoryUseCase {
    
    constructor(
        private readonly repository:CategoryRepository,
    ){}
    execute(dto: CreateCategoryDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}