import { GetByIdDetalleProductMeasuresUseCase } from '../../../Types';
import { DetalleProductMeasuresEntity } from '../Entity/product.measures.entity';
import { DetalleProductMeasuresRepository } from '../repositories/product.measures.repository';


export class GetByIdDetalleProductMeasures implements GetByIdDetalleProductMeasuresUseCase {
    
    constructor(
        private readonly repository:DetalleProductMeasuresRepository,
    ){}
    execute(product_id: number, measures_id: number): Promise<DetalleProductMeasuresEntity> {
        return this.repository.getId(product_id, measures_id);
    }
    
}