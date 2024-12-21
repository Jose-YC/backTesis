import { UserRepository } from "../";
import { UseCase } from "../../../Types";

export class DeleteUser implements UseCase<Boolean, number> {
    
    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(id:number): Promise<Boolean> {
        return this.repository.delete(id);
    }
    
}