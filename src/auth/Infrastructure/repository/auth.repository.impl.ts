import { UserResponse } from "../../../Types/Auth/auth.types";
import { AuthDatasource, AuthRepository, LoginDtos, RegisterDtos } from "../../";

export class AuthRepositoryImp implements AuthRepository {

    constructor(
        private readonly datasource:AuthDatasource,
    ){}

    login(login: LoginDtos): Promise<{user: UserResponse, token:string}> {
        return this.datasource.login(login);
    }
    register(register:RegisterDtos): Promise<{user: UserResponse, token:string}> {
        return this.datasource.register(register);
    }
    confirmarEmail(token:string): Promise<Boolean> {
        return this.datasource.confirmarEmail(token);
    }
    renew(id: number): Promise<String> {
        return this.datasource.renew(id);
    }

   

}