
import { PaginateDtos } from '../../../shared/domain/dto/pagination.dtos';
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateCategoryDtos } from '../dtos/create.category.dtos';
import { UpdateCategoryDtos } from '../dtos/update.category.dtos';
import { CategoryEntity } from '../Entity/category.entity';

export abstract class CategoryRepository {
    
    abstract create(createCategory:CreateCategoryDtos):Promise<Boolean>;
    abstract getAll(dtos:PaginateDtos):Promise<PaginateResponse<CategoryEntity>>;
    abstract getAllChildren(dtos:PaginateDtos):Promise<any>;
    abstract getSearch(dtos:PaginateDtos):Promise<PaginateResponse<CategoryEntity>>;
    abstract getId(id:number):Promise<CategoryEntity>;
    abstract update(updateCategory:UpdateCategoryDtos):Promise<Boolean>;
    abstract delete(id:number):Promise<Boolean>;
}