import { Router } from "express";
import { CategoryDatasourcesImp } from "../../Infrastructure/datasources/category.datasources.imp";
import { CategoryRepositoryImp } from "../../Infrastructure/repository/category.repository.impl";
import { CategoryController } from "../Controller/category.controller";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { AuthMiddleware } from "../../../auth/Presentation/Middleware/auth.middleware";

export class CategoryRoutes {

    static get routes():Router{
        const router = Router();
        // controlador
        const datasource = new CategoryDatasourcesImp();
        const categoryRepository = new CategoryRepositoryImp(datasource)
        const categoryController= new CategoryController(categoryRepository);
        // middleware
        const userDatasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(userDatasource);
        const authMiddleware = new AuthMiddleware(userRepository);
        
        router.get('/', authMiddleware.validateJWT,categoryController.getCategory);
        router.get('/children', authMiddleware.validateJWT,categoryController.getChildrenCategory);
        router.get('/:search', authMiddleware.validateJWT, categoryController.getSearchCategory);
        router.get('/search/:id', authMiddleware.validateJWT, categoryController.getIdCategory);

        router.post('/create', authMiddleware.validateJWT, categoryController.postCategory);
        router.put('/update/:id', authMiddleware.validateJWT, categoryController.putCategory);
        router.delete('/delete/:id', authMiddleware.validateJWT, categoryController.deleteCategory);
        
        return router;
    }
}