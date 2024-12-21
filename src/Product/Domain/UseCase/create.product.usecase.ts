import { UseCase } from "../../../Types";
import { ProductRepositoryImp } from "../../Infrastructure";
import { CreateProductDtos } from "../dtos/create.product.dtos";
import { ProductRepository } from "../repositories/product.repository";


export class CreateProduct implements UseCase<Boolean, CreateProductDtos> {
    
    constructor(
        private readonly repository:ProductRepository,
    ){}
    execute(dto: CreateProductDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}