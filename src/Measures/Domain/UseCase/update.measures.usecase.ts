import { UpdateMeasuresUseCase } from "../../../Types";
import { UpdateMeasuresDtos } from "../dtos/update.measures.dtos";
import { MeasuresRepository } from "../repositories/measures.repository";

export class UpdateMeasures implements UpdateMeasuresUseCase {

    constructor(
        private readonly repository:MeasuresRepository,
    ){}
    execute(dtos:UpdateMeasuresDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}