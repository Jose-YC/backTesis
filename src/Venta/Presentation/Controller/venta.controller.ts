import e, { Request, Response } from "express";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { CreateVenta, CreateVentaDtos, 
         GetAllVenta, GetByIdVenta, VentaRepository, 
         SearchVenta, 
         TotalMonth,
         TotalDay,
         QuantitySaleDay,
         CreateVentaPdf} from "../../Domain";
import { GetByIdVentaDetails } from "../../Domain/UseCase/getByIdDetails.venta.usecase";
import { CreateVentaPDFUseCase } from '../../../Types/Venta/venta.types';

export class VentaController {

    constructor(
        private readonly productRepository:VentaRepository,
    ){}

    public getVenta = async (req:Request, res:Response) =>  {
        
        const { page=0, lim=6 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, error});
        
        new GetAllVenta(this.productRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> res.json({Status:false, error}));
       
    }

    public getSearchVenta = async (req:Request, res:Response) =>  {
        const { page=0, lim=5 } = req.query;
        const search = req.params.search;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim, search);
       
        if (error) return res.json({Status:false, error});
        
       new SearchVenta(this.productRepository)
       .execute(paginateDtos!)
       .then(data => res.json({data}))
       .catch(error=> res.json({Status:false, error}));
    }

    public getIdVenta = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new GetByIdVenta(this.productRepository)
        .execute(id)
        .then(product => {
            res.json({Status:true, product})
        })
        .catch(error=> res.json({Status:false, error}));
    }

    public getIdVentaDetails = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new GetByIdVentaDetails(this.productRepository)
        .execute(id)
        .then(sale => {
            res.json({Status:true, sale})
        })
        .catch(error=> { res.json({Status:false, error})});
    }


    public postVenta = async (req:Request, res:Response) =>  {
        const [ error, createVentaDtos ] = CreateVentaDtos.create(req.body);
        if (error) return res.json({Status:false, error});
        
        
        new CreateVenta(this.productRepository)
        .execute(createVentaDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }

    public getTotalMonth = async (req:Request, res:Response) =>  {
        const { startDate, endDate } = req.body;

        new TotalMonth(this.productRepository)
        .execute(new Date(startDate), new Date(endDate))
        .then(resp => { res.json({Status:true, resp})})
        .catch(error=> res.json({Status:false, error}));
    }

    public getTotalDay = async (req:Request, res:Response) =>  {
        const { startDate, endDate } = req.body;

        new TotalDay(this.productRepository)
        .execute(new Date(startDate), new Date(endDate))
        .then(resp => { res.json({Status:true, resp})})
        .catch(error=> res.json({Status:false, error}));
    }

    public getQuantitySaleDay = async (req:Request, res:Response) =>  {
        const { startDate, endDate } = req.body;

        new QuantitySaleDay(this.productRepository)
        .execute(new Date(startDate), new Date(endDate))
        .then(resp => { res.json({Status:true, resp})})
        .catch(error=> res.json({Status:false, error}));
    }
    
    public getPdf = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new CreateVentaPdf(this.productRepository)
        .execute(id)
        .then(sale => {
            sale.pipe(res)
            sale.end()
        })
        .catch(error=> {
            console.log(error)
            res.json({Status:false, error})
        });
    }

}