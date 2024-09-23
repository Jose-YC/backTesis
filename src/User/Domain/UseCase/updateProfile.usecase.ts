import { UpdateProfileDtos, UserRepository } from "../";
import { UpdateProfileUseCase } from "../../../Types/User/user.types";

export class UpdateProfile implements UpdateProfileUseCase {

    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(dtos:UpdateProfileDtos): Promise<Boolean> {
        return this.repository.profile(dtos);
    }
    
}