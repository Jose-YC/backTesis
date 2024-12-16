import { Router } from "express";
import { VentaDatasourcesImp } from "../../Infrastructure/datasources/venta.datasources.imp";
import { VentaRepositoryImp } from "../../Infrastructure/repository/venta.repository.impl";
import { VentaController } from "../Controller/venta.controller";
import { DetalleProductMeasuresDatasourcesImp } from "../../../Product_Measures";
import { PDFPrinter } from "../../../config/printer.adapter";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { AuthMiddleware } from "../../../auth/Presentation/Middleware/auth.middleware";

export class VentaRoutes {

    static get routes():Router{
        const router = Router();
        // servicio
        const printer = new PDFPrinter();
        // controlador
        const datasourceProduct = new DetalleProductMeasuresDatasourcesImp()
        const datasource = new VentaDatasourcesImp(datasourceProduct, printer);
        const ventaRepository = new VentaRepositoryImp(datasource)
        const ventaController= new VentaController(ventaRepository);
        // middleware
        const userDatasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(userDatasource);
        const authMiddleware = new AuthMiddleware(userRepository);   
        
        router.get('/', authMiddleware.validateJWT, ventaController.getVenta);
        router.get('/:search', authMiddleware.validateJWT, ventaController.getSearchVenta);
        router.get('/search/:id', authMiddleware.validateJWT, ventaController.getIdVenta);
        router.get('/pdf/:id', authMiddleware.validateJWT, ventaController.getPdf);
        router.get('/details/search/:id', authMiddleware.validateJWT, ventaController.getIdVentaDetails);
        
        router.post('/total/month', authMiddleware.validateJWT, ventaController.getTotalMonth);
        router.post('/total/day', authMiddleware.validateJWT, ventaController.getTotalDay);
        router.post('/quantity', authMiddleware.validateJWT, ventaController.getQuantitySaleDay);

        router.post('/create', authMiddleware.validateJWT, ventaController.postVenta);
        
        return router;
    }
}