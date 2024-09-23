import { CreateUserDtos, UserRepository } from "../";
import { CreateUserUseCase } from "../../../Types/User/user.types";

export class CreateUser implements CreateUserUseCase {
    
    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(dto: CreateUserDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}