import { Request, Response } from "express";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { ClientRepository } from "../../Domain/repositories/client.repository";
import { CreateClientDtos } from "../../Domain/dtos/create.client.dtos";
import { UpdateClientDtos } from "../../Domain/dtos/update.client.dtos";
import { GetAllClient } from "../../Domain/UseCase/getAll.client.usecase";
import { SearchClient } from "../../Domain/UseCase/search.client.usecase";
import { GetByIdClient } from "../../Domain/UseCase/getById.client.usecase";
import { CreateClient } from "../../Domain/UseCase/create.client.usecase";
import { UpdateClient } from "../../Domain/UseCase/update.client.usecase";
import { DeleteClient } from "../../Domain/UseCase/delete.client.usecase";
import { errorHandler } from "../../../Server";

export class ClientController {

    constructor(
        private readonly clientRepository:ClientRepository,
    ){}

    public getClient = async (req:Request, res:Response) =>  {
        const { page=0, lim=6 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, error});
        
        new GetAllClient(this.clientRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> errorHandler(error, res));
       
    }

    public getSearchClient = async (req:Request, res:Response) =>  {
        const { page=0, lim=5 } = req.query;
        const search = req.params.search;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim, search);
        if (error) return res.json({Status:false, error});
        
       new SearchClient(this.clientRepository)
       .execute(paginateDtos!)
       .then(data => res.json({data}))
       .catch(error=> errorHandler(error, res));
    }

    public getIdClient = async (req:Request, res:Response) =>  {
        const dni = req.params.dni;

        new GetByIdClient(this.clientRepository)
        .execute(dni)
        .then(client => res.json({Status:true, client}))
        .catch(error=> errorHandler(error, res));
    }

    public postClient = async (req:Request, res:Response) =>  {
        const [ error, createClientDtos ] = CreateClientDtos.create(req.body);
        if (error) return res.json({Status:false, error});
        
        new CreateClient(this.clientRepository)
        .execute(createClientDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }

    public putClient = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        const [ error, updateClientDtos ] = UpdateClientDtos.create({...req.body, id});
        if (error) return res.json({Status:false, error});

        new UpdateClient(this.clientRepository)
        .execute(updateClientDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }


    public deleteClient = async (req:Request, res:Response) =>  {
        const dni = req.params.dni;

        new DeleteClient(this.clientRepository)
        .execute(dni)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }
}