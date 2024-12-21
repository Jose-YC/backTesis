import { Router } from "express";
import { ClientDatasourcesImp } from "../../Infrastructure/datasources/client.datasources.imp";
import { ClientRepositoryImp } from "../../Infrastructure/repository/client.repository.impl";
import { ClientController } from "../Controller/client.controller";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { AuthMiddleware } from "../../../auth/Presentation/Middleware/auth.middleware";

export class ClientRoutes {

    static get routes():Router{
        const router = Router();
        // controlador
        const datasource = new ClientDatasourcesImp();
        const clientRepository = new ClientRepositoryImp(datasource);
        const clientController= new ClientController(clientRepository);
         // middleware
        const userDatasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(userDatasource);
        const authMiddleware = new AuthMiddleware(userRepository);
        
        router.get('/', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'vendedor', 'gerente'])
        ], clientController.getClient);
        router.get('/:search', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'vendedor', 'gerente'])
        ], clientController.getSearchClient);
        router.get('/search/:dni', authMiddleware.validateJWT, clientController.getIdClient);

        router.post('/create', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'vendedor', 'gerente'])
        ], clientController.postClient);

        router.put('/update/:dni', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'gerente'])
        ], clientController.putClient);

        router.delete('/delete/:dni', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'gerente'])
        ], clientController.deleteClient);
        
        return router;
    }
}