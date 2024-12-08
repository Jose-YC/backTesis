import { Request, Response } from "express";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { CreateMeasures, CreateMeasuresDtos, DeleteMeasures,
         GetAllMeasures, GetByIdMeasures, MeasuresRepository, 
         SearchMeasures, UpdateMeasures, UpdateMeasuresDtos } from "../../Domain";

export class MeasuresController {

    constructor(
        private readonly measuresRepository:MeasuresRepository,
    ){}

    public getMeasures = async (req:Request, res:Response) =>  {
        const { page=0, lim=6 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, error});
        
        new GetAllMeasures(this.measuresRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> res.json({Status:false, error}));
       
    }

    public getSearchMeasures = async (req:Request, res:Response) =>  {
        const { page=0, lim=5 } = req.query;
        const search = req.params.search;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim, search);
        if (error) return res.json({Status:false, error});
        
       new SearchMeasures(this.measuresRepository)
       .execute(paginateDtos!)
       .then(data => res.json({data}))
       .catch(error=> res.json({Status:false, error}));
    }

    public getIdMeasures = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new GetByIdMeasures(this.measuresRepository)
        .execute(id)
        .then(measures => res.json({Status:true, measures}))
        .catch(error=> res.json({Status:false, error}));
    }

    public postMeasures = async (req:Request, res:Response) =>  {
        const [ error, createMeasuresDtos ] = CreateMeasuresDtos.create(req.body);
        if (error) return res.json({Status:false, error});
    
        
        new CreateMeasures(this.measuresRepository)
        .execute(createMeasuresDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }

    public putMeasures = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        const [ error, updateMeasuresDtos ] = UpdateMeasuresDtos.create({...req.body, id});
        if (error) return res.json({Status:false, error});

        new UpdateMeasures(this.measuresRepository)
        .execute(updateMeasuresDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }


    public deleteMeasures = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new DeleteMeasures(this.measuresRepository)
        .execute(id)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }
}