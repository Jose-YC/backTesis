import { Router } from "express";
import { UserController, UserDatasourcesImp, UserRepositoryImp } from '../../';
import { AuthMiddleware } from "../../../auth/Presentation/Middleware/auth.middleware";

export class UserRoutes {

    static get routes():Router{
        const router = Router();
        // controlador
        const datasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(datasource)
        const userController= new UserController(userRepository);
        // middleware
        const authMiddleware = new AuthMiddleware(userRepository);   

        router.get('/', authMiddleware.validateJWT, userController.getUser);
        router.get('/:search', authMiddleware.validateJWT, userController.getSearchUser);
        router.get('/search/:id', authMiddleware.validateJWT, userController.getIdUser);

        router.put('/profile/:id', authMiddleware.validateJWT, userController.putProfile);
        router.put('/password/:id', authMiddleware.validateJWT, userController.putUserPassword);
        router.post('/create', authMiddleware.validateJWT, userController.postUser);
        router.put('/update/:id', authMiddleware.validateJWT, userController.putUser);
        router.delete('/delete/:id', authMiddleware.validateJWT, userController.deleteUser);
        
        return router;
    }
}