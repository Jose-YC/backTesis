import { GetAllVentaItemUseCase, PaginateResponse } from "../../../Types";
import {  VentaItemEntity } from "../Entity/venta.details.entity";
import { VentaItemRepository } from "../repositories/venta.details.repository";


export class GetAllVentaItem implements GetAllVentaItemUseCase {
    
    constructor(
        private readonly repository:VentaItemRepository,
    ){}
    execute(id:number): Promise<PaginateResponse<VentaItemEntity>>{
        return this.repository.getAll(id);
    }
    
}