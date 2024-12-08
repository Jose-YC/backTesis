import { Request, Response } from "express";
import {  GetAllOrderItem, OrderItemRepository, } from "../../Domain";

export class OrderItemController {

    constructor(
        private readonly measuresRepository:OrderItemRepository,
    ){}

    public getOrderItem = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        
        new GetAllOrderItem(this.measuresRepository)
        .execute(id!)
        .then(data => res.json({data}))
        .catch(error=> res.json({Status:false, error}));
       
    }

   
}