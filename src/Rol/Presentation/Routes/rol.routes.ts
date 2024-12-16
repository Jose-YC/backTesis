import { Router } from "express";
import { RolDatasourcesImp } from "../../Infrastructure/datasources/rol.datasources.imp";
import { RolRepositoryImp } from "../../Infrastructure/repository/rol.repository.impl";
import { RolController } from "../Controller/rol.controller";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { AuthMiddleware } from "../../../auth/Presentation/Middleware/auth.middleware";


export class RolRoutes {

    static get routes():Router{
        const router = Router();
        // controlador
        const datasource = new RolDatasourcesImp ();
        const rolRepository = new RolRepositoryImp(datasource)
        const rolController= new RolController(rolRepository);
        // middleware
        const userDatasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(userDatasource);
        const authMiddleware = new AuthMiddleware(userRepository);   

        router.get('/', authMiddleware.validateJWT, rolController.getRol);
        router.get('/:search', authMiddleware.validateJWT, rolController.getSearchRol);
        router.get('/search/:id', authMiddleware.validateJWT, rolController.getIdRol);

        router.post('/create', authMiddleware.validateJWT, rolController.postRol);
        router.put('/update/:id', authMiddleware.validateJWT, rolController.putRol);
        router.delete('/delete/:id', authMiddleware.validateJWT, rolController.deleteRol);
        
        return router;
    }
}