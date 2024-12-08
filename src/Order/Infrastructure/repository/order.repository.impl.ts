import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateOrderDtos, OrderDatasource, OrderEntity, OrderEntityDtos, OrderRepository, UpdateOrderDtos } from "../../Domain";

export class OrderRepositoryImp implements OrderRepository {

    constructor(
        private readonly datasource:OrderDatasource,
    ){}

    create(createOrder: CreateOrderDtos): Promise<Boolean> {
       return this.datasource.create(createOrder);
    }
    getAll(dtos:PaginateDtos): Promise<PaginateResponse<OrderEntity>> {
        return this.datasource.getAll(dtos);
    }
    getSearch(dtos:PaginateDtos): Promise<PaginateResponse<OrderEntity>> {
        return this.datasource.getSearch(dtos);
    }
    getId(id: number): Promise<OrderEntity> {
        return this.datasource.getId(id);
    }
    getIdDetails(id: number): Promise<OrderEntityDtos> {
        return this.datasource.getIdDetails(id);
    }
    update(updateOrder: UpdateOrderDtos): Promise<Boolean> {
        return this.datasource.update(updateOrder);
    }
    getPdf(id: number):Promise<PDFKit.PDFDocument>{
        return this.datasource.getPdf(id);
    }

}