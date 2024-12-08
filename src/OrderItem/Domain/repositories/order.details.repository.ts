
import { PaginateDtos } from '../../../shared/domain/dto/pagination.dtos';
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import {  OrderItemEntity } from '../Entity/order.details.entity';

export abstract class OrderItemRepository {
    abstract getAll(id:number):Promise<PaginateResponse<OrderItemEntity>>;
}