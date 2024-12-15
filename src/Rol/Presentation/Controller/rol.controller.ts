import { Request, Response } from "express";
import { CreateRolDtos, RolRepository, UpdateRolDtos } from "../../Domain";
import { CreateRol } from "../../Domain/UseCase/createRol.usecase";
import { DeleteRol } from "../../Domain/UseCase/deleteRol.usecase";
import { UpdateRol } from "../../Domain/UseCase/updateRol.usecase";
import { GetByIdRol } from "../../Domain/UseCase/getByIdRol.usecase";
import { GetAllRol } from "../../Domain/UseCase/getAllRol.usecase";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { SearchRol } from "../../Domain/UseCase/searchRol.usecase";
import { errorHandler } from "../../../Server";

export class RolController {

    constructor(
        private readonly rolRepository:RolRepository,
    ){}

    public getRol = (req:Request, res:Response) =>  {
        const { page=0, lim=0 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, error});

        new GetAllRol(this.rolRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> errorHandler(error, res));
    }
    public getSearchRol = (req:Request, res:Response) =>  {
        const { page=0, lim=5 } = req.query;
        const search = req.params.search;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim, search);
        if (error) return res.json({Status:false, error});
       
        new SearchRol(this.rolRepository)
       .execute(paginateDtos!)
       .then(data => res.json({data}))
       .catch(error=> errorHandler(error, res));
        
    }
    public getIdRol = (req:Request, res:Response) =>  {
        const id = +req.params.id;
        new GetByIdRol(this.rolRepository)
        .execute(id)
        .then(rol => res.json({Status:true, rol}))
        .catch(error=> errorHandler(error, res));
    }

    public postRol = (req:Request, res:Response) =>  {
        const [ error, createRolDtos ] = CreateRolDtos.create(req.body);
        if (error) return res.json({Status:false, error});
        new CreateRol(this.rolRepository)
        .execute(createRolDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }

    public putRol = (req:Request, res:Response) =>  {
        const id = +req.params.id;
        const [ error, updateRolDtos ] = UpdateRolDtos.create({...req.body, id});
        if (error) return res.json({Status:false, error});
        new UpdateRol(this.rolRepository)
        .execute(updateRolDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }

    public deleteRol = (req:Request, res:Response) =>  {
        const id = +req.params.id;
        new DeleteRol(this.rolRepository)
        .execute(id)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }
}