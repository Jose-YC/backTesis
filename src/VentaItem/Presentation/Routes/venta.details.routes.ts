import { Router } from "express";
import { VentaItemDatasourcesImp, VentaItemRepositoryImp } from "../../Infrastructure";
import { VentaItemController } from "../Controller/venta.details.controller";


export class VentaItemRoutes {

    static get routes():Router{
        const router = Router();
        const datasource = new VentaItemDatasourcesImp();
        const orderItemRepository = new VentaItemRepositoryImp(datasource)
        const orderItemController= new VentaItemController(orderItemRepository);
        
        router.get('/:id',orderItemController.getVentaItem);
        
        router.post('/category',orderItemController.getCategoryMonth);
        router.post('/top',orderItemController.getProductTop);
        router.post('/product/sale',orderItemController.getProductSale);
        router.post('/quantity',orderItemController.getQuantityProductDay);
        
        return router;
    }
}