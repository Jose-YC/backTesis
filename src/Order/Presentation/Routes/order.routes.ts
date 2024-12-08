import { Router } from "express";
import { OrderDatasourcesImp } from "../../Infrastructure/datasources/order.datasources.imp";
import { OrderRepositoryImp } from "../../Infrastructure/repository/order.repository.impl";
import { OrderController } from "../Controller/order.controller";
import { DetalleProductMeasuresDatasourcesImp } from "../../../Product_Measures";
import { PDFPrinter } from "../../../config/printer.adapter";

export class OrderRoutes {

    static get routes():Router{
        const router = Router();
        const printer = new PDFPrinter();
        const datasourceProduct = new DetalleProductMeasuresDatasourcesImp()
        const datasource = new OrderDatasourcesImp(datasourceProduct, printer);
        const ordenRepository = new OrderRepositoryImp(datasource)
        const ordenController= new OrderController(ordenRepository);
        
        router.get('/',ordenController.getOrder);
        router.get('/:search', ordenController.getSearchOrder);
        router.get('/search/:id', ordenController.getIdOrder);
        router.get('/pdf/:id', ordenController.getPdf);
        router.get('/details/search/:id', ordenController.getIdOrderDetails);

        router.post('/create', ordenController.postOrder);
        router.put('/update/:id', ordenController.putOrder);
        
        return router;
    }
}