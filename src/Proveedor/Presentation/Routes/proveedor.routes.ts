import { Router } from "express";
import { ProveedorDatasourcesImp, ProveedorRepositoryImp } from "../../Infrastructure";
import { ProveedorController } from "../Controller/proveedor.controller";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { AuthMiddleware } from "../../../auth/Presentation/Middleware/auth.middleware";

export class ProveedorRoutes {

    static get routes():Router{
        const router = Router();
        // controlador
        const datasource = new ProveedorDatasourcesImp();
        const proveedorRepository = new ProveedorRepositoryImp(datasource)
        const proveedorController= new ProveedorController(proveedorRepository);
        // middleware
        const userDatasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(userDatasource);
        const authMiddleware = new AuthMiddleware(userRepository);   

        router.get('/', authMiddleware.validateJWT, proveedorController.getProveedor);
        router.get('/:search', authMiddleware.validateJWT, proveedorController.getSearchProveedor);
        router.get('/search/:id', authMiddleware.validateJWT, proveedorController.getIdProveedor);

        router.post('/create', authMiddleware.validateJWT, proveedorController.postProveedor);
        router.put('/update/:id', authMiddleware.validateJWT, proveedorController.putProveedor);
        router.delete('/delete/:id', authMiddleware.validateJWT, proveedorController.deleteProveedor);
        
        return router;
    }
}