
import { UseCase } from "../../../Types";
import { ProveedorRepository } from "../repositories/proveedor.repository";
export class DeleteProveedor implements UseCase<Boolean, number> {
    
    constructor(
        private readonly repository:ProveedorRepository,
    ){}
    execute(id:number): Promise<Boolean> {
        return this.repository.delete(id);
    }
    
}