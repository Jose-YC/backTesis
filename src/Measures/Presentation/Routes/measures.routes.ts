import { Router } from "express";
import { MeasuresDatasourcesImp, MeasuresRepositoryImp } from "../../Infrastructure";
import { MeasuresController } from "../Controller/measures.controller";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { AuthMiddleware } from "../../../auth/Presentation/Middleware/auth.middleware";


export class MeasuresRoutes {

    static get routes():Router{
        const router = Router();
        // controlador
        const datasource = new MeasuresDatasourcesImp();
        const categoryRepository = new MeasuresRepositoryImp(datasource)
        const categoryController= new MeasuresController(categoryRepository);
          // middleware
         const userDatasource = new UserDatasourcesImp();
         const userRepository = new UserRepositoryImp(userDatasource);
         const authMiddleware = new AuthMiddleware(userRepository);   

        router.get('/', authMiddleware.validateJWT, categoryController.getMeasures);
        router.get('/:search', authMiddleware.validateJWT, categoryController.getSearchMeasures);
        router.get('/search/:id', authMiddleware.validateJWT, categoryController.getIdMeasures);

        router.post('/create', authMiddleware.validateJWT, categoryController.postMeasures);
        router.put('/update/:id', authMiddleware.validateJWT, categoryController.putMeasures);
        router.delete('/delete/:id', authMiddleware.validateJWT, categoryController.deleteMeasures);
        
        return router;
    }
}