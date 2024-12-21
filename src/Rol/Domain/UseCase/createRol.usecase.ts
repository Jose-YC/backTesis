import { UseCase } from "../../../Types";
import { CreateRolDtos, RolRepository } from "../";

export class CreateRol implements UseCase<Boolean, CreateRolDtos> {
    
    constructor(
        private readonly repository:RolRepository,
    ){}
    execute(dto: CreateRolDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}