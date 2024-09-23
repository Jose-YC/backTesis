import { UserEntity, UpdateUserDtos, CreateUserDtos, UpdateProfileDtos } from "../";
import { PaginateDtos } from '../../../shared/domain/dto/pagination.dtos';
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";

export abstract class UserDatasource {
    
    abstract create(createUser:CreateUserDtos):Promise<Boolean>;
    abstract profile(updateProfileDtos:UpdateProfileDtos):Promise<Boolean>;
    abstract getAll(dtos:PaginateDtos):Promise<PaginateResponse<UserEntity>>;
    abstract getSearch(dtos:PaginateDtos):Promise<PaginateResponse<UserEntity>>;
    abstract getId(id:number):Promise<UserEntity>;
    abstract update(updateUser:UpdateUserDtos):Promise<Boolean>;
    abstract delete(id:number):Promise<Boolean>;
}