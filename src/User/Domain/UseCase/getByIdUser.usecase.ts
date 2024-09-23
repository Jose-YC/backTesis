import { UserEntity, UserRepository } from "../";
import { GetByIdUserUseCase } from "../../../Types/User/user.types";

export class GetByIdUser implements GetByIdUserUseCase {
    
    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(id:number): Promise<UserEntity> {
        return this.repository.getId(id);
    }
    
}