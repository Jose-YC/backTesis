import { UseCase } from '../../../Types';
import { UpdatePasswordDtos } from '../dtos/updatePassword.dtos';
import { UserRepository } from '../repositories/user.repository';

export class UpdatePassword implements UseCase<Boolean, UpdatePasswordDtos> {

    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(dtos:UpdatePasswordDtos): Promise<Boolean> {
        return this.repository.updatePassword(dtos);
    }
    
}