import { DeleteMeasuresUseCase } from "../../../Types";
import { MeasuresRepository } from "../repositories/measures.repository";



export class DeleteMeasures implements DeleteMeasuresUseCase {
    
    constructor(
        private readonly repository:MeasuresRepository,
    ){}
    execute(id:number): Promise<Boolean> {
        return this.repository.delete(id);
    }
    
}