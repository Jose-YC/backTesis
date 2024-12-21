import { UseCase } from "../../../Types";
import { CreateDetalleProductCategoryDtos } from "../dtos/create.product.category.dtos";
import { DetalleProductCategoryRepository } from "../repositories/product.category.repository";


export class CreateDetalleProductCategory implements UseCase<Boolean, CreateDetalleProductCategoryDtos> {
    
    constructor(
        private readonly repository:DetalleProductCategoryRepository,
    ){}
    execute(dto: CreateDetalleProductCategoryDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}