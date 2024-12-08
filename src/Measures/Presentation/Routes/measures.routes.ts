import { Router } from "express";
import { MeasuresDatasourcesImp, MeasuresRepositoryImp } from "../../Infrastructure";
import { MeasuresController } from "../Controller/measures.controller";


export class MeasuresRoutes {

    static get routes():Router{
        const router = Router();
        const datasource = new MeasuresDatasourcesImp();
        const categoryRepository = new MeasuresRepositoryImp(datasource)
        const categoryController= new MeasuresController(categoryRepository);
        
        router.get('/',categoryController.getMeasures);
        router.get('/:search', categoryController.getSearchMeasures);
        router.get('/search/:id', categoryController.getIdMeasures);

        router.post('/create', categoryController.postMeasures);
        router.put('/update/:id', categoryController.putMeasures);
        router.delete('/delete/:id', categoryController.deleteMeasures);
        
        return router;
    }
}