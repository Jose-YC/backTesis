
import { PaginateDtos } from '../../../shared/domain/dto/pagination.dtos';
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateDetalleProductCategoryDtos } from '../dtos/create.product.category.dtos';
import { DetalleProductCategoryEntity } from '../Entity/product.category.entity';



export abstract class DetalleProductCategoryDatasource {
    
    abstract create(createDetalleProductCategory:CreateDetalleProductCategoryDtos):Promise<Boolean>;
    abstract getAll(dtos:PaginateDtos):Promise<PaginateResponse<DetalleProductCategoryEntity>>;
    abstract getId(product_id: number, category_id: number):Promise<DetalleProductCategoryEntity>;
    abstract delete(product_id: number, category_id: number):Promise<Boolean>;
}