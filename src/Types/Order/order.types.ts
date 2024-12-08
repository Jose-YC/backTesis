
import { CreateOrderDtos, OrderEntity, OrderEntityDtos, UpdateOrderDtos } from "../../Order"

export interface UpdateOrderUseCase {
    execute(dtos:UpdateOrderDtos):Promise<Boolean>
}

export interface CreateOrderUseCase {
    execute(dto:CreateOrderDtos):Promise<Boolean>
}

export interface CreatePDFUseCase {
    execute(id:number):Promise<PDFKit.PDFDocument>
}

export interface GetByIdOrderDetailsUseCase {
    execute(id:number):Promise<OrderEntityDtos>
}

export interface GetByIdOrderUseCase {
    execute(id:number):Promise<OrderEntity>
}

export interface DeleteOrderUseCase {
    execute(id:number):Promise<Boolean>
}