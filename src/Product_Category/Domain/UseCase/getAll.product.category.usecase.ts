import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { UseCasePaginate, PaginateResponse } from "../../../Types";
import { DetalleProductCategoryEntity } from "../Entity/product.category.entity";
import { DetalleProductCategoryRepository } from "../repositories/product.category.repository";


export class GetAllDetalleProductCategory implements UseCasePaginate<DetalleProductCategoryEntity, PaginateDtos> {
    
    constructor(
        private readonly repository:DetalleProductCategoryRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<DetalleProductCategoryEntity>>{
        return this.repository.getAll(dtos);
    }
    
}