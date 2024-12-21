import { Router } from "express";
import { DetalleProductCategoryDatasourcesImp, DetalleProductCategoryRepositoryImp } from "../../Infrastructure";
import { DetalleProductCategoryController } from "../Controller/product.category.controller";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { AuthMiddleware } from "../../../auth/Presentation/Middleware/auth.middleware";


export class DetalleProductCategoryRoutes {

    static get routes():Router{
        const router = Router();
        // controlador
        const datasource = new DetalleProductCategoryDatasourcesImp();
        const productRepository = new DetalleProductCategoryRepositoryImp(datasource)
        const productController= new DetalleProductCategoryController(productRepository);
        // middleware
        const userDatasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(userDatasource);
        const authMiddleware = new AuthMiddleware(userRepository);   
        
        router.get('/', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], productController.getDetalleProductCategory);

        router.get('/search/:product_id/:category_id', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], productController.getIdDetalleProductCategory);

        router.post('/create', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], productController.postDetalleProductCategory);

        router.delete('/delete/:product_id/:category_id', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], productController.deleteDetalleProductCategory);
        
        return router;
    }
}