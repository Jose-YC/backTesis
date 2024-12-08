import { Router } from "express";
import { DetalleProductMeasuresDatasourcesImp, DetalleProductMeasuresRepositoryImp } from "../../Infrastructure";
import { DetalleProductMeasuresController } from "../Controller/product.measures.controller";


export class    DetalleProductMeasuresRoutes {

    static get routes():Router{
        const router = Router();
        const datasource = new DetalleProductMeasuresDatasourcesImp();
        const productRepository = new DetalleProductMeasuresRepositoryImp(datasource)
        const productController= new DetalleProductMeasuresController(productRepository);
        
        
        router.get('/search/:product_id/:measures_id', productController.getIdDetalleProductMeasures);
        
        router.post('/create/:product_id', productController.postDetalleProductMeasures);
        router.put('/update/:product_id/:measures_id', productController.putDetalleProductMeasures);
        router.put('/stock/increment/:product_id/:measures_id', productController.putIncrementProductMeasures);
        router.put('/stock/decrement/:product_id/:measures_id', productController.putDecrementProductMeasures);
        
        return router;
    }
}