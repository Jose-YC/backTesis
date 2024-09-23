import { UserRepository } from "../";
import { DeleteUserUseCase } from "../../../Types/User/user.types";

export class DeleteUser implements DeleteUserUseCase {
    
    constructor(
        private readonly repository:UserRepository,
    ){}
    execute(id:number): Promise<Boolean> {
        return this.repository.delete(id);
    }
    
}