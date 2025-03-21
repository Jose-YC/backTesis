import { Router } from "express";

import { envs } from "../../../config";
import { AuthDatasourcesImp, AuthRepositoryImp, AuthController } from "../../";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { EmailService } from "../../../Service/email/email.services";
import { AuthMiddleware } from "../Middleware/auth.middleware";



export class AuthRoutes {

    static get routes():Router{
        const router = Router();
        // servicios
        const emailService = new EmailService(envs.MAILER_SERVICE, envs.MAILER_EMAIL, envs.MAILER_KEY);
        // controlador
        const authDatasource = new AuthDatasourcesImp(emailService);
        const authRepository = new AuthRepositoryImp(authDatasource)
        const authController= new AuthController(authRepository);
        // middleware
        const userDatasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(userDatasource);
        const authMiddleware = new AuthMiddleware(userRepository);

        router.get('/renew', authMiddleware.validateJWT, authController.renew);
        router.post('/login', authController.login);
        router.post('/register', authController.register);
        router.get('/validate-email/:token', authController.validateEmail);
        
        return router;
    }
}