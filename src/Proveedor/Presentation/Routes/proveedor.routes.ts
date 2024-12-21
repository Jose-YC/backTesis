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

        router.get('/', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], proveedorController.getProveedor);

        router.get('/:search', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], proveedorController.getSearchProveedor);

        router.get('/search/:id', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], proveedorController.getIdProveedor);

        router.post('/create', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], proveedorController.postProveedor);

        router.put('/update/:id', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], proveedorController.putProveedor);

        router.delete('/delete/:id', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'gerente'])
        ], proveedorController.deleteProveedor);
        
        return router;
    }
}