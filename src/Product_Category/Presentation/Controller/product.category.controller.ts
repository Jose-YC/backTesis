import { Request, Response } from "express";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { CreateDetalleProductCategory, CreateDetalleProductCategoryDtos, DeleteDetalleProductCategory,
         GetAllDetalleProductCategory, GetByIdDetalleProductCategory, DetalleProductCategoryRepository, } from "../../Domain";

export class DetalleProductCategoryController {

    constructor(
        private readonly measuresRepository:DetalleProductCategoryRepository,
    ){}

    public getDetalleProductCategory = async (req:Request, res:Response) =>  {
        const { page=0, lim=6 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, error});
        
        new GetAllDetalleProductCategory(this.measuresRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> res.json({Status:false, error}));
       
    }

    public getIdDetalleProductCategory = async (req:Request, res:Response) =>  {
        const category_id = +req.params.category_id;
        const product_id = +req.params.product_id;

        new GetByIdDetalleProductCategory(this.measuresRepository)
        .execute(product_id, category_id)
        .then(measures => res.json({Status:true, measures}))
        .catch(error=> res.json({Status:false, error}));
    }

    public postDetalleProductCategory = async (req:Request, res:Response) =>  {
        const [ error, createDetalleProductCategoryDtos ] = CreateDetalleProductCategoryDtos.create(req.body);
        if (error) return res.json({Status:false, error});
    
        
        new CreateDetalleProductCategory(this.measuresRepository)
        .execute(createDetalleProductCategoryDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }

    public deleteDetalleProductCategory = async (req:Request, res:Response) =>  {
        const category_id = +req.params.category_id;
        const product_id = +req.params.product_id;

        new DeleteDetalleProductCategory(this.measuresRepository)
        .execute(product_id, category_id)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }
}