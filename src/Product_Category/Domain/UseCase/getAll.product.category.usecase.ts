import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { GetAllDetalleProductCategoryUseCase, PaginateResponse } from "../../../Types";
import { DetalleProductCategoryEntity } from "../Entity/product.category.entity";
import { DetalleProductCategoryRepository } from "../repositories/product.category.repository";


export class GetAllDetalleProductCategory implements GetAllDetalleProductCategoryUseCase {
    
    constructor(
        private readonly repository:DetalleProductCategoryRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<DetalleProductCategoryEntity>>{
        return this.repository.getAll(dtos);
    }
    
}