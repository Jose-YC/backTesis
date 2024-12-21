import { UseCase } from "../../../Types";
import { LoginDtos, AuthRepository, AuthEntityDtos } from "../";

export class Login implements UseCase<AuthEntityDtos, LoginDtos> {
    
    constructor(
        private readonly repository:AuthRepository,
    ){}
    execute(dto: LoginDtos): Promise<AuthEntityDtos> {
        return this.repository.login(dto);
    }
    
}