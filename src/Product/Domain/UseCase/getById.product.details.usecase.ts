import { GetByIdProductUseCase } from "../../../Types";
import { ProductEntity } from "../Entity/product.entity";
import { ProductRepository } from "../repositories/product.repository";

export class GetByIdProductDetails implements GetByIdProductUseCase {
    
    constructor(
        private readonly repository:ProductRepository,
    ){}
    execute(id:number): Promise<ProductEntity> {
        return this.repository.getId(id);
    }
    
}