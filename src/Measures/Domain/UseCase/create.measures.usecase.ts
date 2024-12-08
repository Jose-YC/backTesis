import { CreateMeasuresUseCase } from "../../../Types";
import { CreateMeasuresDtos } from "../dtos/create.measures.dtos";
import { MeasuresRepository } from "../repositories/measures.repository";

export class CreateMeasures implements CreateMeasuresUseCase {
    
    constructor(
        private readonly repository:MeasuresRepository,
    ){}
    execute(dto: CreateMeasuresDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}