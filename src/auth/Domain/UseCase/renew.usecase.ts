import { RenewUseCase } from "../../../Types/Auth/auth.types";
import { AuthRepository } from "../";

export class Renew implements RenewUseCase {
    
    constructor(
        private readonly repository:AuthRepository,
    ){}
    execute(id: number): Promise<String> {
        return this.repository.renew(id);
    }
    
}