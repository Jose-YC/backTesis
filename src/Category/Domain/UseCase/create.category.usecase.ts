import { UseCase } from "../../../Types";
import { CreateCategoryDtos } from "../dtos/create.category.dtos";
import { CategoryRepository } from "../repositories/category.repository";



export class CreateCategory implements UseCase<Boolean, CreateCategoryDtos> {
    
    constructor(
        private readonly repository:CategoryRepository,
    ){}
    execute(dto: CreateCategoryDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}