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

        router.get('/', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin'])
        ], userController.getUser);

        router.get('/:search', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin'])
        ], userController.getSearchUser);

        router.get('/search/:id', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin'])
        ], userController.getIdUser);

        
        router.post('/create', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin'])
        ], userController.postUser);
        
        router.put('/update/:id', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin'])
        ], userController.putUser);
        
        router.delete('/delete/:id', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin'])
        ], userController.deleteUser);
        
        router.put('/profile/:id', authMiddleware.validateJWT, userController.putProfile);
        router.put('/password/:id', authMiddleware.validateJWT, userController.putUserPassword);
        
        return router;
    }
}