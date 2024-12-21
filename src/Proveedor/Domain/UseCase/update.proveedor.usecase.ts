import { UseCase } from "../../../Types";
import { UpdateProveedorDtos } from "../dtos/update.proveedor.dtos";
import { ProveedorRepository } from "../repositories/proveedor.repository";

export class UpdateProveedor implements UseCase<Boolean, UpdateProveedorDtos> {

    constructor(
        private readonly repository:ProveedorRepository,
    ){}
    execute(dtos:UpdateProveedorDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}