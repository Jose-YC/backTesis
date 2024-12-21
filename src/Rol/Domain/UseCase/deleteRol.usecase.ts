import { UseCase } from "../../../Types";
import { RolRepository } from "../repositories/rol.repository";


export class DeleteRol implements UseCase<Boolean, number> {

    constructor(
        private readonly repository:RolRepository,
    ){}
    execute(id:number): Promise<Boolean>{
        return this.repository.delete(id);
    }
    
}