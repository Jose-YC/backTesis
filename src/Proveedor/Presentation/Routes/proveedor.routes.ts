import { Router } from "express";
import { ProveedorDatasourcesImp, ProveedorRepositoryImp } from "../../Infrastructure";
import { ProveedorController } from "../Controller/proveedor.controller";

export class ProveedorRoutes {

    static get routes():Router{
        const router = Router();
        const datasource = new ProveedorDatasourcesImp();
        const proveedorRepository = new ProveedorRepositoryImp(datasource)
        const proveedorController= new ProveedorController(proveedorRepository);
        
        router.get('/', proveedorController.getProveedor);
        router.get('/:search', proveedorController.getSearchProveedor);
        router.get('/search/:id', proveedorController.getIdProveedor);

        router.post('/create', proveedorController.postProveedor);
        router.put('/update/:id', proveedorController.putProveedor);
        router.delete('/delete/:id', proveedorController.deleteProveedor);
        
        return router;
    }
}