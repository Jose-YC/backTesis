import { UseCase } from "../../../Types";
import { RegisterDtos, AuthRepository, AuthEntityDtos } from "../";

export class Register implements UseCase<AuthEntityDtos, RegisterDtos> {

    constructor(
        private readonly repository:AuthRepository,
    ){}
    execute(register:RegisterDtos): Promise<AuthEntityDtos> {
        return this.repository.register(register);
    }
    
}