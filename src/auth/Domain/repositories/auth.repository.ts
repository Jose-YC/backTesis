import { UserResponse } from "../../../Types/Auth/auth.types";
import { LoginDtos, RegisterDtos } from "../";

export abstract class AuthRepository {
    
    abstract login(login:LoginDtos):Promise<{user: UserResponse, token:string}>;
    abstract register(register:RegisterDtos):Promise<{user: UserResponse, token:string}>;
    abstract confirmarEmail(token:string):Promise<Boolean>;
    abstract renew(id: number):Promise<String>;
}