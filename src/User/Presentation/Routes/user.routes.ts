import { Router } from "express";
import { UserController, UserDatasourcesImp, UserRepositoryImp } from '../../';

export class UserRoutes {

    static get routes():Router{
        const router = Router();
        const datasource = new UserDatasourcesImp();
        const userRepository = new UserRepositoryImp(datasource)
        const userController= new UserController(userRepository);
        
        router.get('/', userController.getUser);
        router.get('/:search', userController.getSearchUser);
        router.get('/search/:id', userController.getIdUser);

        router.put('/profile/:id', userController.putProfile);
        router.post('/create', userController.postUser);
        router.put('/update/:id', userController.putUser);
        router.delete('/delete/:id', userController.deleteUser);
        
        return router;
    }
}