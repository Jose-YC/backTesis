import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { GetAllOrderUseCase, PaginateResponse } from "../../../Types";
import { OrderEntity } from "../Entity/order.entity";
import { OrderRepository } from "../repositories/order.repository";

export class SearchOrder implements GetAllOrderUseCase {
    
    constructor(
        private readonly repository:OrderRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<OrderEntity>>{
        return this.repository.getSearch(dtos);
    }
}