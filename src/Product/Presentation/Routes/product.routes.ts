import { Router } from "express";
import { ProductDatasourcesImp } from "../../Infrastructure/datasources/product.datasources.imp";
import { ProductRepositoryImp } from "../../Infrastructure/repository/product.repository.impl";
import { ProductController } from "../Controller/product.controller";


export class ProductRoutes {

    static get routes():Router{
        const router = Router();
        const datasource = new ProductDatasourcesImp();
        const productRepository = new ProductRepositoryImp(datasource)
        const productController= new ProductController(productRepository);

        
        router.get('/',productController.getProduct);
        router.get('/details',productController.getProductDetails);
        router.get('/:search', productController.getSearchProduct);
        router.get('/details/:search', productController.getSearchProductDetails);
        router.get('/search/:id', productController.getIdProduct);
        router.get('/details/search/:id', productController.getIdProductDetails);

        router.post('/create',productController.postProduct);
        router.put('/update/:id', productController.putProduct);
        router.delete('/delete/:id', productController.deleteProduct);
        
        return router;
    }
}