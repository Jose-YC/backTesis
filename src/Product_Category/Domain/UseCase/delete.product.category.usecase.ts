import { DeleteDetalleProductCategoryUseCase } from "../../../Types";
import { DetalleProductCategoryRepository } from "../repositories/product.category.repository";



export class DeleteDetalleProductCategory implements DeleteDetalleProductCategoryUseCase {
    
    constructor(
        private readonly repository:DetalleProductCategoryRepository,
    ){}
    execute(category_id:number, product_id:number,): Promise<Boolean> {
        return this.repository.delete(category_id, product_id);
    }
    
}