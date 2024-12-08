import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CategoryDatasource } from "../../Domain/datasource/category.datasource";
import { CreateCategoryDtos } from "../../Domain/dtos/create.category.dtos";
import { UpdateCategoryDtos } from "../../Domain/dtos/update.category.dtos";
import { CategoryEntity } from "../../Domain/Entity/category.entity";
import { CategoryRepository } from "../../Domain/repositories/category.repository";


export class CategoryRepositoryImp implements CategoryRepository {

    constructor(
        private readonly datasource:CategoryDatasource,
    ){}

    create(createCategory: CreateCategoryDtos): Promise<Boolean> {
       return this.datasource.create(createCategory);
    }
    getAll(dtos:PaginateDtos): Promise<PaginateResponse<CategoryEntity>> {
        return this.datasource.getAll(dtos);
    }
    getAllChildren(dtos:PaginateDtos): Promise<any> {
        return this.datasource.getAllChildren(dtos);
    }
    getSearch(dtos:PaginateDtos): Promise<PaginateResponse<CategoryEntity>> {
        return this.datasource.getSearch(dtos);
    }
    getId(id: number): Promise<CategoryEntity> {
        return this.datasource.getId(id);
    }
    update(updateCategory: UpdateCategoryDtos): Promise<Boolean> {
        return this.datasource.update(updateCategory);
    }
    delete(id: number): Promise<Boolean> {
        return this.datasource.delete(id);
    }

}