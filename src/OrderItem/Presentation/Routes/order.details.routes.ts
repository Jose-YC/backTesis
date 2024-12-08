import { Router } from "express";
import { OrderItemDatasourcesImp, OrderItemRepositoryImp } from "../../Infrastructure";
import { OrderItemController } from "../Controller/order.details.controller";


export class OrderItemRoutes {

    static get routes():Router{
        const router = Router();
        const datasource = new OrderItemDatasourcesImp();
        const orderItemRepository = new OrderItemRepositoryImp(datasource)
        const orderItemController= new OrderItemController(orderItemRepository);
        
        router.get('/:id',orderItemController.getOrderItem);
        
        return router;
    }
}