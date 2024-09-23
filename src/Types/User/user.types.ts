import { CreateUserDtos, UpdateProfileDtos, UpdateUserDtos, UserEntity } from "../../User";

export interface UpdateUserUseCase {
    execute(dtos:UpdateUserDtos):Promise<Boolean>
}

export interface UpdateProfileUseCase {
    execute(dtos:UpdateProfileDtos):Promise<Boolean>
}

export interface CreateUserUseCase {
    execute(dto:CreateUserDtos):Promise<Boolean>
}

export interface GetByIdUserUseCase {
    execute(id:number):Promise<UserEntity>
}

export interface DeleteUserUseCase {
    execute(id:number):Promise<Boolean>
}


