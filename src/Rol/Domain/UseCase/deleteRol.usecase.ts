import { DeleteRolUseCase } from "../../../Types/Rol/rol.types";
import { RolRepository } from "../repositories/rol.repository";


export class DeleteRol implements DeleteRolUseCase {

    constructor(
        private readonly repository:RolRepository,
    ){}
    execute(id:number): Promise<Boolean>{
        return this.repository.delete(id);
    }
    
}