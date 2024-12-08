import { DeleteProductUseCase } from "../../../Types";
import { ProductRepository } from "../repositories/product.repository";


export class DeleteProduct implements DeleteProductUseCase {
    
    constructor(
        private readonly repository:ProductRepository,
    ){}
    execute(id:number): Promise<Boolean> {
        return this.repository.delete(id);
    }
    
}