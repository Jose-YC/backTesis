import { UpdateUserDtos, UserRepository } from "../";
import { UseCase } from "../../../Types";

export class UpdateUser implements UseCase<Boolean, UpdateUserDtos> {

    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(dtos:UpdateUserDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}