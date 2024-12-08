import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { DetalleProductCategoryDatasource } from "../../Domain/datasource/product.category.datasource";
import { CreateDetalleProductCategoryDtos } from "../../Domain/dtos/create.product.category.dtos";
import { DetalleProductCategoryEntity } from "../../Domain/Entity/product.category.entity";
import { DetalleProductCategoryRepository } from "../../Domain/repositories/product.category.repository";



export class DetalleProductCategoryRepositoryImp implements DetalleProductCategoryRepository {

    constructor(
        private readonly datasource:DetalleProductCategoryDatasource,
    ){}

    create(createDetalleProductCategory: CreateDetalleProductCategoryDtos): Promise<Boolean> {
       return this.datasource.create(createDetalleProductCategory);
    }
    getAll(dtos:PaginateDtos): Promise<PaginateResponse<DetalleProductCategoryEntity>> {
        return this.datasource.getAll(dtos);
    }

    getId(product_id: number, category_id: number): Promise<DetalleProductCategoryEntity> {
        return this.datasource.getId(product_id, category_id);
    }
    
    delete(product_id: number, category_id: number): Promise<Boolean> {
        return this.datasource.delete(product_id, category_id);
    }

}