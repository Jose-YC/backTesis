import { UseCase } from "../../../Types";
import { ProveedorEntity } from "../Entity/proveedor.entity";
import { ProveedorRepository } from "../repositories/proveedor.repository";

export class GetByIdProveedor implements UseCase<ProveedorEntity, number> {
    
    constructor(
        private readonly repository:ProveedorRepository,
    ){}
    execute(id:number): Promise<ProveedorEntity> {
        return this.repository.getId(id);
    }
    
}