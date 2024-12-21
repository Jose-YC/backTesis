import { UseCaseDetails } from "../../../Types";
import { DetalleProductCategoryRepository } from "../repositories/product.category.repository";



export class DeleteDetalleProductCategory implements UseCaseDetails<Boolean, number, number> {
    
    constructor(
        private readonly repository:DetalleProductCategoryRepository,
    ){}
    execute(category_id:number, product_id:number,): Promise<Boolean> {
        return this.repository.delete(category_id, product_id);
    }
    
}