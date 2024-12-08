
import { PaginateDtos } from '../../../shared/domain/dto/pagination.dtos';
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateOrderDtos } from '../dtos/create.order.dtos';
import { OrderEntityDtos } from '../dtos/orden.entity.dtos';
import { UpdateOrderDtos } from '../dtos/update.order.dtos';
import { OrderEntity } from '../Entity/order.entity';

export abstract class OrderRepository {
    
    abstract create(createOrder:CreateOrderDtos):Promise<Boolean>;
    abstract getAll(dtos:PaginateDtos):Promise<PaginateResponse<OrderEntity>>;
    abstract getSearch(dtos:PaginateDtos):Promise<PaginateResponse<OrderEntity>>;
    abstract getId(id:number):Promise<OrderEntity>;
    abstract getIdDetails(id:number):Promise<OrderEntityDtos>;
    abstract update(updateOrder:UpdateOrderDtos):Promise<Boolean>;
    abstract getPdf(id: number):Promise<PDFKit.PDFDocument>;
}