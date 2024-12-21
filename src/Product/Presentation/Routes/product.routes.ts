import { Router } from "express";
import { ProductDatasourcesImp } from "../../Infrastructure/datasources/product.datasources.imp";
import { ProductRepositoryImp } from "../../Infrastructure/repository/product.repository.impl";
import { ProductController } from "../Controller/product.controller";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { AuthMiddleware } from "../../../auth/Presentation/Middleware/auth.middleware";


export class ProductRoutes {

    static get routes():Router{
        const router = Router();
        // controlador
        const datasource = new ProductDatasourcesImp();
        const productRepository = new ProductRepositoryImp(datasource)
        const productController= new ProductController(productRepository);
        // middleware
        const userDatasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(userDatasource);
        const authMiddleware = new AuthMiddleware(userRepository);   
        
        router.get('/', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], productController.getProduct);

        router.get('/details', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], productController.getProductDetails);

        router.get('/:search', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], productController.getSearchProduct);

        router.get('/details/:search', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], productController.getSearchProductDetails);

        router.get('/search/:id', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], productController.getIdProduct);

        router.get('/details/search/:id', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen', 'gerente'])
        ], productController.getIdProductDetails);

        router.post('/create', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen'])
        ], productController.postProduct);

        router.put('/update/:id', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen'])
        ], productController.putProduct);

        router.delete('/delete/:id',[
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'jefe almacen'])
        ], productController.deleteProduct);
        
        return router;
    }
}