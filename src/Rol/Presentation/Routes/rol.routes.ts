import { Router } from "express";
import { RolDatasourcesImp } from "../../Infrastructure/datasources/rol.datasources.imp";
import { RolRepositoryImp } from "../../Infrastructure/repository/rol.repository.impl";
import { RolController } from "../Controller/rol.controller";


export class RolRoutes {

    static get routes():Router{
        const router = Router();
        const datasource = new RolDatasourcesImp ();
        const rolRepository = new RolRepositoryImp(datasource)
        const rolController= new RolController(rolRepository);

        router.get('/', rolController.getRol);
        router.get('/:search', rolController.getSearchRol);
        router.get('/search/:id', rolController.getIdRol);

        router.post('/create', rolController.postRol);
        router.put('/update/:id', rolController.putRol);
        router.delete('/delete/:id', rolController.deleteRol);
        
        return router;
    }
}