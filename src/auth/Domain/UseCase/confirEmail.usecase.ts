import { ConfirEmailUseCase } from "../../../Types/Auth/auth.types";
import { AuthRepository } from "../";

export class ConfirEmail implements ConfirEmailUseCase {
    
    constructor(
        private readonly repository:AuthRepository,
    ){}
    execute(token: string): Promise<Boolean> {
        return this.repository.confirmarEmail(token);
    }
    
}