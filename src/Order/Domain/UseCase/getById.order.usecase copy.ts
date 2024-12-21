import { UseCase } from "../../../Types";
import { OrderEntity } from "../Entity/order.entity";
import { OrderRepository } from "../repositories/order.repository";

export class GetByIdOrder implements UseCase<OrderEntity, number> {
    
    constructor(
        private readonly repository:OrderRepository,
    ){}
    execute(id:number): Promise<OrderEntity> {
        return this.repository.getId(id);
    }
    
}