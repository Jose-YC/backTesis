import { Request, Response } from "express";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { CreateMeasures, CreateMeasuresDtos, DeleteMeasures,
         GetAllMeasures, GetByIdMeasures, MeasuresRepository, 
         SearchMeasures, UpdateMeasures, UpdateMeasuresDtos } from "../../Domain";
import { CustomError, errorHandler } from "../../../Server";

export class MeasuresController {

    constructor(
        private readonly measuresRepository:MeasuresRepository,
    ){}

    public getMeasures = async (req:Request, res:Response) =>  {
        const { page=0, lim=6 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, message: error});
        
        new GetAllMeasures(this.measuresRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> errorHandler(error, res));
       
    }

    public getSearchMeasures = async (req:Request, res:Response) =>  {
        const { page=0, lim=5 } = req.query;
        const search = req.params.search;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim, search);
        if (error) return res.json({Status:false, message: error});
        
       new SearchMeasures(this.measuresRepository)
       .execute(paginateDtos!)
       .then(data => res.json({data}))
       .catch(error=> errorHandler(error, res));
    }

    public getIdMeasures = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new GetByIdMeasures(this.measuresRepository)
        .execute(id)
        .then(measures => res.json({Status:true, measures}))
        .catch(error=> errorHandler(error, res));
    }

    public postMeasures = async (req:Request, res:Response) =>  {
        const [ error, createMeasuresDtos ] = CreateMeasuresDtos.create(req.body);
        if (error) return res.json({Status:false, message: error});
        // if (error) throw CustomError.badRequest(error);
    
        
        new CreateMeasures(this.measuresRepository)
        .execute(createMeasuresDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }

    public putMeasures = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        const [ error, updateMeasuresDtos ] = UpdateMeasuresDtos.create({...req.body, id});
        if (error) return res.json({Status:false, message: error});

        new UpdateMeasures(this.measuresRepository)
        .execute(updateMeasuresDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }


    public deleteMeasures = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new DeleteMeasures(this.measuresRepository)
        .execute(id)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }

    
}