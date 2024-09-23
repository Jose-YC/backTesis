import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { URLEntity, CreateURLDtos, UpdateURLDtos } from "../";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";


export abstract class URLRepository {
    
    abstract create(createURL:CreateURLDtos):Promise<String>;
    abstract getAll(dtos:PaginateDtos):Promise<PaginateResponse<URLEntity>>;
    abstract getAllUserURL(dtos:PaginateDtos):Promise<PaginateResponse<URLEntity>>;
    abstract getId(id:number):Promise<URLEntity>;
    abstract update(updateURL:UpdateURLDtos):Promise<Boolean>;
    abstract delete(id:number):Promise<Boolean>;
}