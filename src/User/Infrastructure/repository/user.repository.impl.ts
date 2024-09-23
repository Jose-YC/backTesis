import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateUserDtos, UpdateProfileDtos, UpdateUserDtos, 
         UserDatasource, UserEntity,
         UserRepository } from "../../Domain";


export class UserRepositoryImp implements UserRepository {

    constructor(
        private readonly datasource:UserDatasource,
    ){}

    create(createUser: CreateUserDtos): Promise<Boolean> {
       return this.datasource.create(createUser);
    }
    profile(updateProfileDtos:UpdateProfileDtos): Promise<Boolean> {
        return this.datasource.profile(updateProfileDtos);
    }
    getAll(dtos:PaginateDtos): Promise<PaginateResponse<UserEntity>> {
        return this.datasource.getAll(dtos);
    }
    getSearch(dtos:PaginateDtos): Promise<PaginateResponse<UserEntity>> {
        return this.datasource.getSearch(dtos);
    }
    getId(id: number): Promise<UserEntity> {
        return this.datasource.getId(id);
    }
    update(updateUser: UpdateUserDtos): Promise<Boolean> {
        return this.datasource.update(updateUser);
    }
    delete(id: number): Promise<Boolean> {
        return this.datasource.delete(id);
    }

}