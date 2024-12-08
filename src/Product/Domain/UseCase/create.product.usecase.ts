import { CreateProductUseCase } from "../../../Types";
import { ProductRepositoryImp } from "../../Infrastructure";
import { CreateProductDtos } from "../dtos/create.product.dtos";
import { ProductRepository } from "../repositories/product.repository";


export class CreateProduct implements CreateProductUseCase {
    
    constructor(
        private readonly repository:ProductRepository,
    ){}
    execute(dto: CreateProductDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}