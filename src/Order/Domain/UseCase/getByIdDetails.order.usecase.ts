import { GetByIdOrderDetailsUseCase } from "../../../Types";
import { OrderEntityDtos } from "../dtos/orden.entity.dtos";
import { OrderRepository } from "../repositories/order.repository";

export class GetByIdOrderDetails implements GetByIdOrderDetailsUseCase {
    
    constructor(
        private readonly repository:OrderRepository,
    ){}
    execute(id:number): Promise<OrderEntityDtos> {
        return this.repository.getIdDetails(id);
    }
    
}