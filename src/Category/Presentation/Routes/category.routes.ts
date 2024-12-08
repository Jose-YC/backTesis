import { Router } from "express";
import { CategoryDatasourcesImp } from "../../Infrastructure/datasources/category.datasources.imp";
import { CategoryRepositoryImp } from "../../Infrastructure/repository/category.repository.impl";
import { CategoryController } from "../Controller/category.controller";

export class CategoryRoutes {

    static get routes():Router{
        const router = Router();
        const datasource = new CategoryDatasourcesImp();
        const categoryRepository = new CategoryRepositoryImp(datasource)
        const categoryController= new CategoryController(categoryRepository);
        
        router.get('/',categoryController.getCategory);
        router.get('/children',categoryController.getChildrenCategory);
        router.get('/:search', categoryController.getSearchCategory);
        router.get('/search/:id', categoryController.getIdCategory);

        router.post('/create', categoryController.postCategory);
        router.put('/update/:id', categoryController.putCategory);
        router.delete('/delete/:id', categoryController.deleteCategory);
        
        return router;
    }
}