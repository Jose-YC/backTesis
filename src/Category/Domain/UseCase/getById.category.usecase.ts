import { UseCase } from "../../../Types";
import { CategoryEntity } from "../Entity/category.entity";
import { CategoryRepository } from "../repositories/category.repository";

export class GetByIdCategory implements UseCase<CategoryEntity, number> {
    
    constructor(
        private readonly repository:CategoryRepository,
    ){}
    execute(id:number): Promise<CategoryEntity> {
        return this.repository.getId(id);
    }
    
}