import { RegisterUserUseCase, UserResponse } from "../../../Types/Auth/auth.types";
import { RegisterDtos, AuthRepository } from "../";

export class Register implements RegisterUserUseCase {

    constructor(
        private readonly repository:AuthRepository,
    ){}
    execute(register:RegisterDtos): Promise<{user: UserResponse, token:string}> {
        return this.repository.register(register);
    }
    
}