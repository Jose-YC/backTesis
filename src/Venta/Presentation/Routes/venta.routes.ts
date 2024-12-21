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
        
        router.get('/', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'vendedor', 'jefe ventas', 'gerente'])
        ], ventaController.getVenta);

        router.get('/:search', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'vendedor', 'jefe ventas', 'gerente'])
        ], ventaController.getSearchVenta);

        router.get('/search/:id', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'vendedor', 'jefe ventas', 'gerente'])
        ], ventaController.getIdVenta);

        // router.get('/pdf/:id', [
        //     authMiddleware.validateJWT, 
        //     authMiddleware.validateRol(...['admin', 'vendedor', 'jefe ventas', 'gerente'])
        // ], ventaController.getPdf);

        router.get('/pdf/:id', ventaController.getPdf);


        router.get('/details/search/:id', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'vendedor', 'jefe ventas', 'gerente'])
        ], ventaController.getIdVentaDetails);

        router.post('/total/month', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'gerente'])
        ], ventaController.getTotalMonth);

        router.post('/total/day', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'gerente'])
        ], ventaController.getTotalDay);

        router.post('/quantity', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'gerente'])
        ], ventaController.getQuantitySaleDay);

        router.post('/create', [
            authMiddleware.validateJWT, 
            authMiddleware.validateRol(...['admin', 'vendedor', 'gerente'])
        ], ventaController.postVenta);
        
        return router;
    }
}