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
        const categoryRepository = new DetalleProductCategoryRepositoryImp(datasource)
        const categoryController= new DetalleProductCategoryController(categoryRepository);
        // middleware
        const userDatasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(userDatasource);
        const authMiddleware = new AuthMiddleware(userRepository);   
        
        router.get('/', authMiddleware.validateJWT, categoryController.getDetalleProductCategory);
        router.get('/search/:product_id/:category_id', authMiddleware.validateJWT, categoryController.getIdDetalleProductCategory);

        router.post('/create', authMiddleware.validateJWT, categoryController.postDetalleProductCategory);
        router.delete('/delete/:product_id/:category_id', authMiddleware.validateJWT, categoryController.deleteDetalleProductCategory);
        
        return router;
    }
}