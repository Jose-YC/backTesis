import { UpdatePasswordUseCase } from '../../../Types/User/user.types';
import { UpdatePasswordDtos } from '../dtos/updatePassword.dtos';
import { UserRepository } from '../repositories/user.repository';

export class UpdatePassword implements UpdatePasswordUseCase {

    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(dtos:UpdatePasswordDtos): Promise<Boolean> {
        return this.repository.updatePassword(dtos);
    }
    
}