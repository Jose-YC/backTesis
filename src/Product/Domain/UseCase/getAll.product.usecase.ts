import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { GetAllProductDtosUseCase, PaginateResponse } from "../../../Types";
import { ProductEntityDtos } from "../dtos/product.dtos";
import { ProductRepository } from "../repositories/product.repository";

export class GetAllProduct implements GetAllProductDtosUseCase {
    
    constructor(
        private readonly repository:ProductRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<ProductEntityDtos>>{
        return this.repository.getAllProduct(dtos);
    }
    
}