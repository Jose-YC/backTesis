import { Request, Response } from "express";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { CreateOrder, CreateOrderDtos, 
         CreatePdf, 
         GetAllOrder, GetByIdOrder, OrderRepository, 
         SearchOrder, UpdateOrder, UpdateOrderDtos } from "../../Domain";
import { GetByIdOrderDetails } from "../../Domain/UseCase/getByIdDetails.order.usecase";

export class OrderController {

    constructor(
        private readonly productRepository:OrderRepository,
    ){}

    public getOrder = async (req:Request, res:Response) =>  {
        
        const { page=0, lim=6 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, error});
        
        new GetAllOrder(this.productRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> res.json({Status:false, error}));
       
    }

    public getSearchOrder = async (req:Request, res:Response) =>  {
        const { page=0, lim=5 } = req.query;
        const search = req.params.search;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim, search);
       
        if (error) return res.json({Status:false, error});
        
       new SearchOrder(this.productRepository)
       .execute(paginateDtos!)
       .then(data => res.json({data}))
       .catch(error=> res.json({Status:false, error}));
    }

    public getIdOrder = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new GetByIdOrder(this.productRepository)
        .execute(id)
        .then(product => {
            res.json({Status:true, product})
        })
        .catch(error=> res.json({Status:false, error}));
    }

    public getIdOrderDetails = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new GetByIdOrderDetails(this.productRepository)
        .execute(id)
        .then(orden => {
            res.json({Status:true, orden})
        })
        .catch(error=> res.json({Status:false, error}));
    }

    public getPdf = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new CreatePdf(this.productRepository)
        .execute(id)
        .then(orden => {
            orden.pipe(res)
            orden.end()
        })
        .catch(error=> {
            console.log(error)
            res.json({Status:false, error})
        });
    }


    public postOrder = async (req:Request, res:Response) =>  {
        const [ error, createOrderDtos ] = CreateOrderDtos.create(req.body);
        if (error) return res.json({Status:false, error});
        
        
        new CreateOrder(this.productRepository)
        .execute(createOrderDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }

    public putOrder = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        const [ error, updateOrderDtos ] = UpdateOrderDtos.create({...req.body, id});
        if (error) return res.json({Status:false, error});

        new UpdateOrder(this.productRepository)
        .execute(updateOrderDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }
}