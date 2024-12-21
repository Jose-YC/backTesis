import { UseCase } from "../../../Types";
import { UpdateOrderDtos } from "../dtos/update.order.dtos";
import { OrderRepository } from "../repositories/order.repository";

export class UpdateOrder implements UseCase<Boolean, UpdateOrderDtos> {

    constructor(
        private readonly repository:OrderRepository,
    ){}
    execute(dtos:UpdateOrderDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}