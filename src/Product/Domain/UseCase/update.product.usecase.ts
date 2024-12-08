import { UpdateProductUseCase } from "../../../Types";
import { UpdateProductDtos } from "../dtos/update.product.dtos";
import { ProductRepository } from "../repositories/product.repository";

export class UpdateProduct implements UpdateProductUseCase {

    constructor(
        private readonly repository:ProductRepository,
    ){}
    execute(dtos:UpdateProductDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}