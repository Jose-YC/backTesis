import { UseCase } from "../../../Types";
import { AuthRepository } from "../";

export class Renew implements UseCase<String, number> {
    
    constructor(
        private readonly repository:AuthRepository,
    ){}
    execute(id: number): Promise<String> {
        return this.repository.renew(id);
    }
    
}