import { AuthEntityDtos, LoginDtos, RegisterDtos } from "../";

export abstract class AuthDatasource {
    
    abstract login(login: LoginDtos):Promise<AuthEntityDtos>;
    abstract register(register:RegisterDtos):Promise<AuthEntityDtos>;
    abstract confirmarEmail(token:string):Promise<Boolean>;
    abstract renew(id: number):Promise<String>;
}