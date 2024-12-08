import { Router } from "express";
import { ClientDatasourcesImp } from "../../Infrastructure/datasources/client.datasources.imp";
import { ClientRepositoryImp } from "../../Infrastructure/repository/client.repository.impl";
import { ClientController } from "../Controller/client.controller";

export class ClientRoutes {

    static get routes():Router{
        const router = Router();
        const datasource = new ClientDatasourcesImp();
        const clientRepository = new ClientRepositoryImp(datasource);
        const clientController= new ClientController(clientRepository);
        
        router.get('/',clientController.getClient);
        router.get('/:search', clientController.getSearchClient);
        router.get('/search/:dni', clientController.getIdClient);

        router.post('/create', clientController.postClient);
        router.put('/update/:dni', clientController.putClient);
        router.delete('/delete/:dni', clientController.deleteClient);
        
        return router;
    }
}