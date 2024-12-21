import { UseCase } from "../../../Types";
import { VentaEntityDtos } from "../dtos/venta.entity.dtos";
import { VentaRepository } from "../repositories/venta.repository";

export class GetByIdVentaDetails implements UseCase<VentaEntityDtos, number> {
    
    constructor(
        private readonly repository:VentaRepository,
    ){}
    execute(id:number): Promise<VentaEntityDtos> {
        return this.repository.getIdDetails(id);
    }
    
}