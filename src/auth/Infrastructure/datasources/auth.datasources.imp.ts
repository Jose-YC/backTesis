import { CustomError, prisma } from "../../../Server";
import { AuthDatasource, RegisterDtos, LoginDtos, AuthEntityDtos } from "../../Domain";
import { EmailService } from '../../../Service/email/email.services';
import { bcryptjsAdapter, envs, jwtAdapter } from "../../../config";

export class AuthDatasourcesImp implements AuthDatasource {

    constructor(
        private readonly emailService: EmailService
    ){}

    private async Emaillink(email:string) {
        const token = await jwtAdapter.generatetJWT({email});
        if (!token) { throw CustomError.internalServer('Error al crear token')};

        const link = `${envs.WEBSERVICE_URL}auth/validate-email/${token}`;

        const send = await this.emailService.sendEmailToken(email, link);

        return send
    }

    async login(login: LoginDtos): Promise<AuthEntityDtos> {
        const user = await prisma.user.findFirst({where:{email:login.email}});
        if (!user) throw CustomError.badRequest('Usuario o contraseña incorrectos');

        const validPasword = bcryptjsAdapter.compare(login.password, user.password);
        if (!validPasword) throw CustomError.badRequest('Usuario o contraseña incorrectos');
        
        const token = await jwtAdapter.generatetJWT<string>({id: user.id});
        if (!token) throw CustomError.internalServer('Error al crear token');

        return AuthEntityDtos.fromObject({user, token});
    }

    async register(register:RegisterDtos): Promise<AuthEntityDtos> {
        const userVeri = await prisma.user.findFirst({where: { email: register.email }});
        if (userVeri) throw CustomError.badRequest('El usuario ya existe');
        
        const password = bcryptjsAdapter.hash(register.password);

        const user = await prisma.user.create({data: {...register, password}});
        if (!user) throw CustomError.badRequest('No se pudo guardar el usuario');

        const token = await jwtAdapter.generatetJWT<string>({id: user.id});
         if (!token) { throw CustomError.internalServer('Error al crear token')};

        const send = await this.Emaillink(register.email);
        if (!send) { throw CustomError.internalServer('Error al enviar el correo electrónico')};

        return AuthEntityDtos.fromObject({user, token});
    }

    async confirmarEmail(token:string): Promise<Boolean> {
        const tokenValid = await jwtAdapter.validatetetJWT(token);
        if (!tokenValid) throw CustomError.badRequest('Token no valido');

        const { email } = tokenValid as {email:string};
        if (!email) throw CustomError.internalServer('Token no valido');

        const user = await prisma.user.update({where: {email}, data: {emailVeri: true}});
        if (!user) throw CustomError.badRequest('Token no valido');

        return true;
    }

    async renew(id: number): Promise<String> {
        const token = await jwtAdapter.generatetJWT<string>({id});
        if (!token) throw CustomError.internalServer('Falla en la creacion de token');
        return token;
    }
}