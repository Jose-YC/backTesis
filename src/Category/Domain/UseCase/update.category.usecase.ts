import { UseCase } from "../../../Types";
import { UpdateCategoryDtos } from "../dtos/update.category.dtos";
import { CategoryRepository } from "../repositories/category.repository";

export class UpdateCategory implements UseCase<Boolean, UpdateCategoryDtos> {

    constructor(
        private readonly repository:CategoryRepository,
    ){}
    execute(dtos:UpdateCategoryDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}