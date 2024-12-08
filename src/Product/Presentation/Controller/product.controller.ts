import { Request, Response } from "express";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { CreateProduct, CreateProductDtos, DeleteProduct, 
         GetAllProduct, GetAllProductDetails, GetByIdProduct, GetByIdProductDetails, ProductRepository, 
         SearchProduct, SearchProductDetails, UpdateProduct, UpdateProductDtos } from "../../Domain";

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
        .catch(error=> res.json({Status:false, error}));
       
    }

    public getProductDetails = async (req:Request, res:Response) =>  {
        
        const { page=0, lim=6 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, error});
        
        new GetAllProductDetails(this.productRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> res.json({Status:false, error}));
       
    }

    public getSearchProduct = async (req:Request, res:Response) =>  {
        const { page=0, lim=5 } = req.query;
        const search = req.params.search;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim, search);
       
        if (error) return res.json({Status:false, error});
        
       new SearchProduct(this.productRepository)
       .execute(paginateDtos!)
       .then(data => res.json({data}))
       .catch(error=> res.json({Status:false, error}));
    }

    public getSearchProductDetails = async (req:Request, res:Response) =>  {
        const { page=0, lim=5 } = req.query;
        const search = req.params.search;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim, search);
       
        if (error) return res.json({Status:false, error});
        
       new SearchProductDetails(this.productRepository)
       .execute(paginateDtos!)
       .then(data => res.json({data}))
       .catch(error=> res.json({Status:false, error}));
    }

    public getIdProduct = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new GetByIdProduct(this.productRepository)
        .execute(id)
        .then(product => {
            res.json({Status:true, product})
        })
        .catch(error=> res.json({Status:false, error}));
    }

    public getIdProductDetails = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new GetByIdProductDetails(this.productRepository)
        .execute(id)
        .then(product => {
            res.json({Status:true, product})
        })
        .catch(error=> res.json({Status:false, error}));
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
        .catch(error=> res.json({Status:false, error}));
    }


    public deleteProduct = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new DeleteProduct(this.productRepository)
        .execute(id)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }
}