import { CreateRolUseCase } from "../../../Types/Rol/rol.types";
import { CreateRolDtos, RolRepository } from "../";

export class CreateRol implements CreateRolUseCase {
    
    constructor(
        private readonly repository:RolRepository,
    ){}
    execute(dto: CreateRolDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}