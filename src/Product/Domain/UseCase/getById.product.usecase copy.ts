import { UseCase } from "../../../Types";
import { ProductEntityDtos } from "../dtos/product.dtos";
import { ProductRepository } from "../repositories/product.repository";

export class GetByIdProduct implements UseCase<ProductEntityDtos, number> {
    
    constructor(
        private readonly repository:ProductRepository,
    ){}
    execute(id:number): Promise<ProductEntityDtos> {
        return this.repository.getIdProduct(id);
    }
    
}