import { UseCase } from "../../../Types";
import { UpdateRolDtos, RolRepository } from "../";

export class UpdateRol implements UseCase<Boolean, UpdateRolDtos> {

    constructor(
        private readonly repository:RolRepository,
    ){}
    execute(dtos:UpdateRolDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}