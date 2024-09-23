import { CustomError, prisma } from "../../../Server";
import { AuthDatasource, RegisterDtos, LoginDtos } from "../../Domain";
import { EmailService } from '../../../Service/email/email.services';
import { bcryptjsAdapter, envs, jwtAdapter } from "../../../config";
import { UserResponse } from "../../../Types/Auth/auth.types";


export class AuthDatasourcesImp implements AuthDatasource {

    constructor(
        private readonly emailService: EmailService
    ){}

    private async Emaillink(email:string) {
        const token = await jwtAdapter.generatetJWT({email});
        if (!token) { throw CustomError.internalServer('Error while creating JWT')};

        const link = `${envs.WEBSERVICE_URL}auth/validate-email/${token}`;

        const send = await this.emailService.sendEmailToken(email, link);

        return send
    }

    async login(login: LoginDtos): Promise<{user: UserResponse, token:string}> {
        const user = await prisma.user.findFirst({where:{email:login.email}});
        if (!user) throw CustomError.badRequest('user or password incorrect - user');

        const validPasword = bcryptjsAdapter.compare(login.password, user.password);
        if (!validPasword) throw CustomError.badRequest('user or password incorrect - password');

        const token = await jwtAdapter.generatetJWT<string>({id: user.id});
        if (!token) throw CustomError.internalServer('Error while creating JWT');

        return {
                user:{
                        id: user.id, 
                        email:user.email,
                        name:user.name,
                        lastname:user.lastname,
                        phone:user.phone,
                        emailVeri:user.emailVeri,
                        rolName:user.rolName,
                    }, 
                token
        };
    }

    async register(register:RegisterDtos): Promise<{user: UserResponse, token:string}> {
        const userVeri = await prisma.user.findFirst({where: { email: register.email }});
        if (userVeri) throw CustomError.badRequest('user exist');
        
        const password = bcryptjsAdapter.hash(register.password);

        const user = await prisma.user.create({data: {...register, password}});
        if (!user) throw CustomError.badRequest('user could not be saved');
        console.log(user);
        const token = await jwtAdapter.generatetJWT<string>({id: user.id});
         if (!token) { throw CustomError.internalServer('Error while creating JWT')};

        const send = await this.Emaillink(register.email);
        if (!send) { throw CustomError.internalServer('Error when sending an email')};

        return {
            user:{
                    id: user.id, 
                    email:user.email,
                    name:user.name,
                    lastname:user.lastname,
                    phone:user.phone,
                    emailVeri:user.emailVeri,
                    rolName:user.rolName,
                }, 
            token
        };

    }

    async confirmarEmail(token:string): Promise<Boolean> {
        const tokenValid = await jwtAdapter.validatetetJWT(token);
        if (!tokenValid) { throw CustomError.badRequest('Verification rejected')};

        const { email } = tokenValid as {email:string};
        if (!email) { throw CustomError.internalServer('Email not in token')};

        const user = await prisma.user.update({where: {email}, data: {emailVeri: true}});
        if (!user) { throw CustomError.internalServer('Email not exist')};

        return true;
    }
    async renew(id: number): Promise<String> {
        const token = await jwtAdapter.generatetJWT<string>({id});
        if (!token) { throw CustomError.internalServer('Error while creating JWT')};
        return token;
    }

    


}