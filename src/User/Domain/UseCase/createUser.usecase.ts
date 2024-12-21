import { CreateUserDtos, UserRepository } from "../";
import { UseCase } from "../../../Types";

export class CreateUser implements UseCase<Boolean, CreateUserDtos> {
    
    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(dto: CreateUserDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}