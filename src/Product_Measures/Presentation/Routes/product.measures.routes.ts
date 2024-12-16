import { Router } from "express";
import { DetalleProductMeasuresDatasourcesImp, DetalleProductMeasuresRepositoryImp } from "../../Infrastructure";
import { DetalleProductMeasuresController } from "../Controller/product.measures.controller";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { AuthMiddleware } from "../../../auth/Presentation/Middleware/auth.middleware";


export class    DetalleProductMeasuresRoutes {

    static get routes():Router{
        const router = Router();
        // controlador
        const datasource = new DetalleProductMeasuresDatasourcesImp();
        const productRepository = new DetalleProductMeasuresRepositoryImp(datasource)
        const productController= new DetalleProductMeasuresController(productRepository);
        // middleware
        const userDatasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(userDatasource);
        const authMiddleware = new AuthMiddleware(userRepository);   
        
        router.get('/search/:product_id/:measures_id', authMiddleware.validateJWT, productController.getIdDetalleProductMeasures);
        
        router.post('/create/:product_id', authMiddleware.validateJWT, productController.postDetalleProductMeasures);
        router.put('/update/:product_id/:measures_id', authMiddleware.validateJWT, productController.putDetalleProductMeasures);
        router.put('/stock/increment/:product_id/:measures_id', authMiddleware.validateJWT, productController.putIncrementProductMeasures);
        router.put('/stock/decrement/:product_id/:measures_id', authMiddleware.validateJWT, productController.putDecrementProductMeasures);
        
        return router;
    }
}