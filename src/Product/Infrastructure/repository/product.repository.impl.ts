import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateProductDtos, ProductDatasource, ProductEntity, ProductEntityDtos, ProductRepository, UpdateProductDtos } from "../../Domain";

export class ProductRepositoryImp implements ProductRepository {

    constructor(
        private readonly datasource:ProductDatasource,
    ){}

    create(createProduct: CreateProductDtos): Promise<Boolean> {
       return this.datasource.create(createProduct);
    }
    getAll(dtos:PaginateDtos): Promise<PaginateResponse<ProductEntity>> {
        return this.datasource.getAll(dtos);
    }
    getAllProduct(dtos:PaginateDtos): Promise<PaginateResponse<ProductEntityDtos>> {
        return this.datasource.getAllProduct(dtos);
    }
    getSearch(dtos:PaginateDtos): Promise<PaginateResponse<ProductEntity>> {
        return this.datasource.getSearch(dtos);
    }
    getSearchProduct(dtos:PaginateDtos): Promise<PaginateResponse<ProductEntityDtos>> {
        return this.datasource.getSearchProduct(dtos);
    }
    getId(id: number): Promise<ProductEntity> {
        return this.datasource.getId(id);
    }
    getIdProduct(id: number): Promise<ProductEntityDtos> {
        return this.datasource.getIdProduct(id);
    }
    update(updateProduct: UpdateProductDtos): Promise<Boolean> {
        return this.datasource.update(updateProduct);
    }
    delete(id: number): Promise<Boolean> {
        return this.datasource.delete(id);
    }

}