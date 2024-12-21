import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { UseCasePaginate, PaginateResponse } from "../../../Types";
import { MeasuresEntity } from "../Entity/measures.entity";
import { MeasuresRepository } from "../repositories/measures.repository";

export class SearchMeasures implements UseCasePaginate<MeasuresEntity, PaginateDtos> {
    
    constructor(
        private readonly repository:MeasuresRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<MeasuresEntity>>{
        return this.repository.getSearch(dtos);
    }
}