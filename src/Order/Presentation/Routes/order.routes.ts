import { Router } from "express";
import { OrderDatasourcesImp } from "../../Infrastructure/datasources/order.datasources.imp";
import { OrderRepositoryImp } from "../../Infrastructure/repository/order.repository.impl";
import { OrderController } from "../Controller/order.controller";
import { DetalleProductMeasuresDatasourcesImp } from "../../../Product_Measures";
import { PDFPrinter } from "../../../config/printer.adapter";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { AuthMiddleware } from "../../../auth/Presentation/Middleware/auth.middleware";

export class OrderRoutes {

    static get routes():Router{
        const router = Router();
        // servicio
        const printer = new PDFPrinter();
        // controlador
        const datasourceProduct = new DetalleProductMeasuresDatasourcesImp()
        const datasource = new OrderDatasourcesImp(datasourceProduct, printer);
        const ordenRepository = new OrderRepositoryImp(datasource)
        const ordenController= new OrderController(ordenRepository);
        // middleware
        const userDatasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(userDatasource);
        const authMiddleware = new AuthMiddleware(userRepository);   
        
        router.get('/', authMiddleware.validateJWT, ordenController.getOrder);
        router.get('/:search', authMiddleware.validateJWT, ordenController.getSearchOrder);
        router.get('/search/:id', authMiddleware.validateJWT, ordenController.getIdOrder);
        router.get('/pdf/:id', authMiddleware.validateJWT, ordenController.getPdf);
        router.get('/details/search/:id', authMiddleware.validateJWT, ordenController.getIdOrderDetails);

        router.post('/create', authMiddleware.validateJWT, ordenController.postOrder);
        router.put('/update/:id', authMiddleware.validateJWT, ordenController.putOrder);
        
        return router;
    }
}