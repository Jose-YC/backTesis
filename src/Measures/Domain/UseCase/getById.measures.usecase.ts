import { GetByIdMeasuresUseCase } from '../../../Types';
import { MeasuresEntity } from '../Entity/measures.entity';
import { MeasuresRepository } from '../repositories/measures.repository';


export class GetByIdMeasures implements GetByIdMeasuresUseCase {
    
    constructor(
        private readonly repository:MeasuresRepository,
    ){}
    execute(id:number): Promise<MeasuresEntity> {
        return this.repository.getId(id);
    }
    
}