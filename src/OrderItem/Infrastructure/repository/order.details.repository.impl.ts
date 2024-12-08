import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { OrderItemDatasource } from "../../Domain/datasource/order.details.datasource";
import { OrderItemEntity } from "../../Domain/Entity/order.details.entity";
import { OrderItemRepository } from "../../Domain/repositories/order.details.repository";



export class OrderItemRepositoryImp implements OrderItemRepository {

    constructor(
        private readonly datasource:OrderItemDatasource,
    ){}

    getAll(id:number): Promise<PaginateResponse<OrderItemEntity>> {
        return this.datasource.getAll(id);
    }

}