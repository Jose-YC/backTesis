import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { GetAllMeasuresUseCase, PaginateResponse } from "../../../Types";
import { MeasuresEntity } from "../Entity/measures.entity";
import { MeasuresRepository } from "../repositories/measures.repository";


export class GetAllMeasures implements GetAllMeasuresUseCase {
    
    constructor(
        private readonly repository:MeasuresRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<MeasuresEntity>>{
        return this.repository.getAll(dtos);
    }
    
}