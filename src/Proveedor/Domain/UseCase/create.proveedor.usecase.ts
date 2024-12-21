import { UseCase } from "../../../Types";
import { CreateProveedorDtos } from "../dtos/create.proveedor.dtos";
import { ProveedorRepository } from "../repositories/proveedor.repository";



export class CreateProveedor implements UseCase<Boolean, CreateProveedorDtos> {
    
    constructor(
        private readonly repository:ProveedorRepository,
    ){}
    execute(dto: CreateProveedorDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}