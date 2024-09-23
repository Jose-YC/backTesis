import { Router } from "express";
import { URLController, URLRepositoryImp, URLDatasourcesImp } from "../../";
import { UserDatasourcesImp, UserRepositoryImp } from "../../../User";
import { AuthMiddleware } from "../../../shared/middlewares/auth.middleware";

export class URLRoutes {

    static get routes():Router{
        const router = Router();
        const datasource = new URLDatasourcesImp();
        const urlRepository = new URLRepositoryImp(datasource)
        const urlController= new URLController(urlRepository);

        const datasourceUser = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(datasourceUser)
        const authMiddleware = new AuthMiddleware(userRepository);

        router.get('/', urlController.getURL);
        router.get('/:id', urlController.getIdURL);
        router.get('/user/:id', urlController.getUserURL);

        router.post('/create', [authMiddleware.optionalValidateJWT], urlController.postURL);
        router.put('/update/:id', urlController.getURL);
        router.delete('/delete', urlController.getURL);
        
        return router;
    }
}