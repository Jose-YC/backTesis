import { Request, Response } from "express";
import { CreateProveedor, CreateProveedorDtos, DeleteProveedor, 
    GetAllProveedor, GetByIdProveedor, ProveedorRepository, SearchProveedor, 
    UpdateProveedor, UpdateProveedorDtos } from "../../Domain";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";

export class ProveedorController {

    constructor(
        private readonly ProveedorRepository:ProveedorRepository,
    ){}

    public getProveedor = async (req:Request, res:Response) =>  {
        const { page=0, lim=6 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, error});
        
        new GetAllProveedor(this.ProveedorRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> res.json({Status:false, error}));
       
    }

    public getSearchProveedor = async (req:Request, res:Response) =>  {
        const { page=0, lim=5 } = req.query;
        const search = req.params.search;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim, search);
        if (error) return res.json({Status:false, error});
        
       new SearchProveedor(this.ProveedorRepository)
       .execute(paginateDtos!)
       .then(data => res.json({data}))
       .catch(error=> res.json({Status:false, error}));
    }

    public getIdProveedor = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new GetByIdProveedor(this.ProveedorRepository)
        .execute(id)
        .then(supplier => res.json({Status:true, supplier}))
        .catch(error=> res.json({Status:false, error}));
    }

    public postProveedor = async (req:Request, res:Response) =>  {
        const [ error, createProveedorDtos ] = CreateProveedorDtos.create(req.body);
        if (error) return res.json({Status:false, error});
    
        
        new CreateProveedor(this.ProveedorRepository)
        .execute(createProveedorDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }

    public putProveedor = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        const [ error, updateProveedorDtos ] = UpdateProveedorDtos.create({...req.body, id});
        if (error) return res.json({Status:false, error});

        new UpdateProveedor(this.ProveedorRepository)
        .execute(updateProveedorDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }


    public deleteProveedor = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        new DeleteProveedor(this.ProveedorRepository)
        .execute(id)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }
}