import { LoginUseCase, UserResponse } from "../../../Types/Auth/auth.types";
import { LoginDtos, AuthRepository } from "../";

export class Login implements LoginUseCase {
    
    constructor(
        private readonly repository:AuthRepository,
    ){}
    execute(dto: LoginDtos): Promise<{user: UserResponse, token:string}> {
        return this.repository.login(dto);
    }
    
}