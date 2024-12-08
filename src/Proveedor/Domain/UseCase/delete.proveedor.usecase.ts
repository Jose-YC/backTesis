
import { DeleteProveedorUseCase } from "../../../Types";
import { ProveedorRepository } from "../repositories/proveedor.repository";
export class DeleteProveedor implements DeleteProveedorUseCase {
    
    constructor(
        private readonly repository:ProveedorRepository,
    ){}
    execute(id:number): Promise<Boolean> {
        return this.repository.delete(id);
    }
    
}