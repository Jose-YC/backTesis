import { UseCase } from "../../../Types";
import { VentaEntity } from "../Entity/venta.entity";
import { VentaRepository } from "../repositories/venta.repository";

export class GetByIdVenta implements UseCase<VentaEntity, number> {
    
    constructor(
        private readonly repository:VentaRepository,
    ){}
    execute(id:number): Promise<VentaEntity> {
        return this.repository.getId(id);
    }
    
}