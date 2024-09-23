import { GetByIdRolUseCase } from "../../../Types/Rol/rol.types";
import { RolEntity, RolRepository } from "../";

export class GetByIdRol implements GetByIdRolUseCase {
    

    constructor(
        private readonly repository:RolRepository,
    ){}
    execute(id:number): Promise<RolEntity> {
        return this.repository.getId(id);
    }
    
}