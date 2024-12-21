import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { UseCasePaginate, PaginateResponse } from "../../../Types";
import {  OrderItemEntity } from "../Entity/order.details.entity";
import { OrderItemRepository } from "../repositories/order.details.repository";


export class GetAllOrderItem implements UseCasePaginate<OrderItemEntity, number> {
    
    constructor(
        private readonly repository:OrderItemRepository,
    ){}
    execute(id:number): Promise<PaginateResponse<OrderItemEntity>>{
        return this.repository.getAll(id);
    }
    
}