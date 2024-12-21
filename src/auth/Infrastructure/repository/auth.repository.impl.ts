import { AuthDatasource, AuthEntityDtos, AuthRepository, LoginDtos, RegisterDtos } from "../../";

export class AuthRepositoryImp implements AuthRepository {

    constructor(
        private readonly datasource:AuthDatasource,
    ){}

    login(login: LoginDtos): Promise<AuthEntityDtos> {
        return this.datasource.login(login);
    }
    register(register:RegisterDtos): Promise<AuthEntityDtos> {
        return this.datasource.register(register);
    }
    confirmarEmail(token:string): Promise<Boolean> {
        return this.datasource.confirmarEmail(token);
    }
    renew(id: number): Promise<String> {
        return this.datasource.renew(id);
    }

   

}