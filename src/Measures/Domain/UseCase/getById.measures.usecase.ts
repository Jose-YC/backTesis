import { UseCase } from '../../../Types';
import { MeasuresEntity } from '../Entity/measures.entity';
import { MeasuresRepository } from '../repositories/measures.repository';


export class GetByIdMeasures implements UseCase<MeasuresEntity, number> {
    
    constructor(
        private readonly repository:MeasuresRepository,
    ){}
    execute(id:number): Promise<MeasuresEntity> {
        return this.repository.getId(id);
    }
    
}