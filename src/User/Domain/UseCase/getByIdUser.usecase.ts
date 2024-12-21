import { UserEntity, UserRepository } from "../";
import { UseCase } from "../../../Types";

export class GetByIdUser implements UseCase<UserEntity, number> {
    
    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(id:number): Promise<UserEntity> {
        return this.repository.getId(id);
    }
    
}