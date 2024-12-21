import { UseCase } from "../../../Types";
import { UpdateProductDtos } from "../dtos/update.product.dtos";
import { ProductRepository } from "../repositories/product.repository";

export class UpdateProduct implements UseCase<Boolean, UpdateProductDtos> {

    constructor(
        private readonly repository:ProductRepository,
    ){}
    execute(dtos:UpdateProductDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}