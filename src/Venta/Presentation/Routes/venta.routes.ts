import { Router } from "express";
import { VentaDatasourcesImp } from "../../Infrastructure/datasources/venta.datasources.imp";
import { VentaRepositoryImp } from "../../Infrastructure/repository/venta.repository.impl";
import { VentaController } from "../Controller/venta.controller";
import { DetalleProductMeasuresDatasourcesImp } from "../../../Product_Measures";
import { PDFPrinter } from "../../../config/printer.adapter";

export class VentaRoutes {

    static get routes():Router{
        const router = Router();
        const printer = new PDFPrinter();
        const datasourceProduct = new DetalleProductMeasuresDatasourcesImp()
        const datasource = new VentaDatasourcesImp(datasourceProduct, printer);
        const ventaRepository = new VentaRepositoryImp(datasource)
        const ventaController= new VentaController(ventaRepository);
        
        router.get('/',ventaController.getVenta);
        router.get('/:search', ventaController.getSearchVenta);
        router.get('/search/:id', ventaController.getIdVenta);
        router.get('/pdf/:id', ventaController.getPdf);
        router.get('/details/search/:id', ventaController.getIdVentaDetails);
        
        router.post('/total/month', ventaController.getTotalMonth);
        router.post('/total/day', ventaController.getTotalDay);
        router.post('/quantity', ventaController.getQuantitySaleDay);

        router.post('/create', ventaController.postVenta);
        
        return router;
    }
}