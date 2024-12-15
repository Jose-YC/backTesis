import { Request, Response } from "express";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { CreateProduct, CreateProductDtos, DeleteProduct, 
         GetAllProduct, GetAllProductDetails, GetByIdProduct, GetByIdProductDetails, ProductRepository, 
         SearchProduct, SearchProductDetails, UpdateProduct, UpdateProductDtos } from "../../Domain";
import { errorHandler } from "../../../Server";

export class ProductController {

    constructor(
        private readonly productRepository:ProductRepository,
    ){}

    public getProduct = async (req:Request, res:Response) =>  {
        
        const { page=0, lim=6 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, error});
        
        new GetAllProduct(this.productRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> errorHandler(error, res));
       
    }

    public getProductDetails = async (req:Request, res:Response) =>  {
        
        const { page=0, lim=6 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, error});
        
        new GetAllProductDetails(this.productRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> errorHandler(error, res));
       
    }

    public getSearchProduct = async (req:Request, res:Response) =>  {
        const { page=0, lim=5 } = req.query;
        const search = req.params.search;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim, search);
       
        if (error) return res.json({Status:false, error});
        
       new SearchProduct(this.productRepository)
       .execute(paginateDtos!)
       .then(data => res.json({data}))
       .catch(error=> errorHandler(error, res));
    }

    public getSearchProductDetails = async (req:Request, res:Response) =>  {
        const { page=0, lim=5 } = req.query;
        const search = req.params.search;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim, search);
       
        if (error) return res.json({Status:false, error});
        
       new SearchProductDetails(this.productRepository)
       .execute(paginateDtos!)
       .then(data => res.json({data}))
       .catch(error=> errorHandler(error, res));
    }

    public getIdProduct = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new GetByIdProduct(this.productRepository)
        .execute(id)
        .then(product => res.json({Status:true, product}))
        .catch(error=> errorHandler(error, res));
    }

    public getIdProductDetails = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new GetByIdProductDetails(this.productRepository)
        .execute(id)
        .then(product => res.json({Status:true, product}))
        .catch(error=> errorHandler(error, res));
    }

    public postProduct = async (req:Request, res:Response) =>  {
        const [ error, createProductDtos ] = CreateProductDtos.create({...req.body, img:  req.files!.img});
        if (error) return res.json({Status:false, error});
    
        
        new CreateProduct(this.productRepository)
        .execute(createProductDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }

    public putProduct = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        const [ error, updateProductDtos ] = UpdateProductDtos.create({...req.body, id});
        if (error) return res.json({Status:false, error});

        new UpdateProduct(this.productRepository)
        .execute(updateProductDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }


    public deleteProduct = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new DeleteProduct(this.productRepository)
        .execute(id)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }
}