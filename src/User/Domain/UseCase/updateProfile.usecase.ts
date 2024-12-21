import { UpdateProfileDtos, UserRepository } from "../";
import { UseCase } from "../../../Types";

export class UpdateProfile implements UseCase<Boolean, UpdateProfileDtos> {

    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(dtos:UpdateProfileDtos): Promise<Boolean> {
        return this.repository.profile(dtos);
    }
    
}