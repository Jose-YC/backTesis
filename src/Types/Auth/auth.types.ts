import { LoginDtos, RegisterDtos } from "../../auth"

export interface UserResponse {
    id:number,
    email:string,
    name:string,
    lastname:string,
    phone:string,
    emailVeri:boolean,
    rolName:string,
    img?:string,
}

export interface ConfirEmailUseCase {
    execute(token:string):Promise<Boolean>
}

export interface LoginUseCase {
    execute(dto:LoginDtos):Promise<{user: UserResponse, token:string}>
}

export interface RegisterUserUseCase {
    execute(register:RegisterDtos):Promise<{user: UserResponse, token:string}>
}

export interface RenewUseCase {
    execute(id: number):Promise<String>
}
