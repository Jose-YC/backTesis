import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { UseCasePaginate, PaginateResponse } from "../../../Types";
import { VentaEntity } from "../Entity/venta.entity";
import { VentaRepository } from "../repositories/venta.repository";

export class SearchVenta implements UseCasePaginate<VentaEntity, PaginateDtos> {
    
    constructor(
        private readonly repository:VentaRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<VentaEntity>>{
        return this.repository.getSearch(dtos);
    }
}