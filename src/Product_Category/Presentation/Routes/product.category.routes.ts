import { Router } from "express";
import { DetalleProductCategoryDatasourcesImp, DetalleProductCategoryRepositoryImp } from "../../Infrastructure";
import { DetalleProductCategoryController } from "../Controller/product.category.controller";


export class DetalleProductCategoryRoutes {

    static get routes():Router{
        const router = Router();
        const datasource = new DetalleProductCategoryDatasourcesImp();
        const categoryRepository = new DetalleProductCategoryRepositoryImp(datasource)
        const categoryController= new DetalleProductCategoryController(categoryRepository);
        
        router.get('/',categoryController.getDetalleProductCategory);
        router.get('/search/:product_id/:category_id', categoryController.getIdDetalleProductCategory);

        router.post('/create', categoryController.postDetalleProductCategory);
        router.delete('/delete/:product_id/:category_id', categoryController.deleteDetalleProductCategory);
        
        return router;
    }
}