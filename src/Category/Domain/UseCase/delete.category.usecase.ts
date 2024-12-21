
import { UseCase } from "../../../Types";
import { CategoryRepository } from "../repositories/category.repository";

export class DeleteCategory implements UseCase<Boolean, number> {
    
    constructor(
        private readonly repository:CategoryRepository,
    ){}
    execute(id:number): Promise<Boolean> {
        return this.repository.delete(id);
    }
    
}