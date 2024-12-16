import { Router } from "express";
import { OrderItemDatasourcesImp, OrderItemRepositoryImp } from "../../Infrastructure";
import { OrderItemController } from "../Controller/order.details.controller";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { AuthMiddleware } from "../../../auth/Presentation/Middleware/auth.middleware";


export class OrderItemRoutes {

    static get routes():Router{
        const router = Router();
        // controlador
        const datasource = new OrderItemDatasourcesImp();
        const orderItemRepository = new OrderItemRepositoryImp(datasource)
        const orderItemController= new OrderItemController(orderItemRepository);
        // middleware
        const userDatasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(userDatasource);
        const authMiddleware = new AuthMiddleware(userRepository);   

        router.get('/:id', authMiddleware.validateJWT, orderItemController.getOrderItem);
        
        return router;
    }
}