import { Router } from "express";
import { VentaItemDatasourcesImp, VentaItemRepositoryImp } from "../../Infrastructure";
import { VentaItemController } from "../Controller/venta.details.controller";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { AuthMiddleware } from "../../../auth/Presentation/Middleware/auth.middleware";


export class VentaItemRoutes {

    static get routes():Router{
        const router = Router();
        // controlador
        const datasource = new VentaItemDatasourcesImp();
        const orderItemRepository = new VentaItemRepositoryImp(datasource)
        const orderItemController= new VentaItemController(orderItemRepository);
        // middleware
        const userDatasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(userDatasource);
        const authMiddleware = new AuthMiddleware(userRepository);   

        router.get('/:id', authMiddleware.validateJWT, orderItemController.getVentaItem);
        
        router.post('/category', authMiddleware.validateJWT, orderItemController.getCategoryMonth);
        router.post('/top', authMiddleware.validateJWT, orderItemController.getProductTop);
        router.post('/product/sale', authMiddleware.validateJWT, orderItemController.getProductSale);
        router.post('/quantity', authMiddleware.validateJWT, orderItemController.getQuantityProductDay);
        
        return router;
    }
}