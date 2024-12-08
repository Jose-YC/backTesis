import { CreateOrderUseCase } from "../../../Types";
import { CreateOrderDtos } from "../dtos/create.order.dtos";
import { OrderRepository } from "../repositories/order.repository";


export class CreateOrder implements CreateOrderUseCase {
    
    constructor(
        private readonly repository:OrderRepository,
    ){}
    execute(dto: CreateOrderDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}