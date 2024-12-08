import { GetByIdDetalleProductCategoryUseCase } from '../../../Types';
import { DetalleProductCategoryEntity } from '../Entity/product.category.entity';
import { DetalleProductCategoryRepository } from '../repositories/product.category.repository';


export class GetByIdDetalleProductCategory implements GetByIdDetalleProductCategoryUseCase {
    
    constructor(
        private readonly repository:DetalleProductCategoryRepository,
    ){}
    execute(category_id:number, product_id:number,): Promise<DetalleProductCategoryEntity> {
        return this.repository.getId(category_id, product_id);
    }
    
}