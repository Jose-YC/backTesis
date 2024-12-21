import { UseCase } from "../../../Types";
import { CreateOrderDtos } from "../dtos/create.order.dtos";
import { OrderRepository } from "../repositories/order.repository";


export class CreateOrder implements UseCase<Boolean, CreateOrderDtos> {
    
    constructor(
        private readonly repository:OrderRepository,
    ){}
    execute(dto: CreateOrderDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}