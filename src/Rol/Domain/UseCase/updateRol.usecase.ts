import { UpdateRolUseCase } from "../../../Types/Rol/rol.types";
import { UpdateRolDtos, RolRepository } from "../";

export class UpdateRol implements UpdateRolUseCase {

    constructor(
        private readonly repository:RolRepository,
    ){}
    execute(dtos:UpdateRolDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}