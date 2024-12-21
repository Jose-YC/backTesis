import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { UseCasePaginate, PaginateResponse } from "../../../Types";
import { ProductEntity } from "../Entity/product.entity";
import { ProductRepository } from "../repositories/product.repository";

export class GetAllProductDetails implements UseCasePaginate<ProductEntity, PaginateDtos> {
    
    constructor(
        private readonly repository:ProductRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<ProductEntity>>{
        return this.repository.getAll(dtos);
    }
    
}