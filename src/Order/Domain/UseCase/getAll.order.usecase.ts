import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { UseCasePaginate, PaginateResponse } from "../../../Types";
import { OrderEntity } from "../Entity/order.entity";
import { OrderRepository } from "../repositories/order.repository";

export class GetAllOrder implements UseCasePaginate<OrderEntity, PaginateDtos> {
    
    constructor(
        private readonly repository:OrderRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<OrderEntity>>{
        return this.repository.getAll(dtos);
    }
    
}