import { UseCase } from "../../../Types";
import { RolEntity, RolRepository } from "../";

export class GetByIdRol implements UseCase<RolEntity, number> {
    
    constructor(
        private readonly repository:RolRepository,
    ){}
    execute(id:number): Promise<RolEntity> {
        return this.repository.getId(id);
    }
    
}