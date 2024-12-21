import { UseCase } from "../../../Types";
import { AuthRepository } from "../";

export class ConfirEmail implements UseCase<Boolean, string> {
    
    constructor(
        private readonly repository:AuthRepository,
    ){}
    execute(token: string): Promise<Boolean> {
        return this.repository.confirmarEmail(token);
    }
    
}