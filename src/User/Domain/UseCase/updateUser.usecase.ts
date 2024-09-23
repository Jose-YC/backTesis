import { UpdateUserDtos, UserRepository } from "../";
import { UpdateUserUseCase } from "../../../Types/User/user.types";

export class UpdateUser implements UpdateUserUseCase {

    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(dtos:UpdateUserDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}