
import { PaginateDtos } from '../../../shared/domain/dto/pagination.dtos';
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateProductDtos } from '../dtos/create.product.dtos';
import { ProductEntityDtos } from '../dtos/product.dtos';
import { UpdateProductDtos } from '../dtos/update.product.dtos';
import { ProductEntity } from '../Entity/product.entity';


export abstract class ProductDatasource {
    
    abstract create(createProduct:CreateProductDtos):Promise<Boolean>;
    abstract getAll(dtos:PaginateDtos):Promise<PaginateResponse<ProductEntity>>;
    abstract getAllProduct(dtos:PaginateDtos):Promise<PaginateResponse<ProductEntityDtos>>;
    abstract getSearch(dtos:PaginateDtos):Promise<PaginateResponse<ProductEntity>>;
    abstract getSearchProduct(dtos:PaginateDtos):Promise<PaginateResponse<ProductEntityDtos>>;
    abstract getId(id:number):Promise<ProductEntity>;
    abstract getIdProduct(id:number):Promise<ProductEntityDtos>;
    abstract update(updateProduct:UpdateProductDtos):Promise<Boolean>;
    abstract delete(id:number):Promise<Boolean>;
}