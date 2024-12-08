import { Request, Response } from "express";
import {  CategoryMonth, GetAllVentaItem, ProductSale, ProductTop, QuantityProductDay, VentaItemRepository, } from "../../Domain";

export class VentaItemController {

    constructor(
        private readonly measuresRepository:VentaItemRepository,
    ){}

    public getVentaItem = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        
        new GetAllVentaItem(this.measuresRepository)
        .execute(id!)
        .then(data => res.json({data}))
        .catch(error=> res.json({Status:false, error}));
       
    }

    public getCategoryMonth = async (req:Request, res:Response) =>  {
        const { startDate, endDate } = req.body;
        
        new CategoryMonth(this.measuresRepository)
        .execute(new Date(startDate), new Date(endDate))
        .then(resp => { res.json({Status:true, resp})})
        .catch(error=> res.json({Status:false, error}));
       
    }

    public getProductTop = async (req:Request, res:Response) =>  {
        const { startDate, endDate } = req.body;
        
        new ProductTop(this.measuresRepository)
        .execute(new Date(startDate), new Date(endDate))
        .then(resp => { res.json({Status:true, resp})})
        .catch(error=> res.json({Status:false, error}));
       
    }

    public getProductSale = async (req:Request, res:Response) =>  {
        const { startDate, endDate } = req.body;
        
        new ProductSale(this.measuresRepository)
        .execute(new Date(startDate), new Date(endDate))
        .then(resp => { res.json({Status:true, resp})})
        .catch(error=> {res.json({Status:false, error})});
       
    }

    public getQuantityProductDay = async (req:Request, res:Response) =>  {
        const { startDate, endDate } = req.body;
        
        new QuantityProductDay(this.measuresRepository)
        .execute(new Date(startDate), new Date(endDate))
        .then(resp => { res.json({Status:true, resp})})
        .catch(error=> res.json({Status:false, error}));
       
    }

   
}