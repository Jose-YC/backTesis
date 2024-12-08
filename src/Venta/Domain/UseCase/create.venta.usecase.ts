import { CreateVentaUseCase } from "../../../Types";
import { CreateVentaDtos } from "../dtos/create.venta.dtos";
import { VentaRepository } from "../repositories/venta.repository";



export class CreateVenta implements CreateVentaUseCase {
    
    constructor(
        private readonly repository:VentaRepository,
    ){}
    execute(dto: CreateVentaDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}