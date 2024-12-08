import { QuantityProductDayUseCase } from "../../../Types";
import { DashboardDtos } from "../../../Venta/Domain";
import { VentaItemRepository } from "../repositories/venta.details.repository";


export class QuantityProductDay implements QuantityProductDayUseCase {
    
    constructor(
        private readonly repository:VentaItemRepository,
    ){}
    execute(startDate: Date, endDate: Date): Promise<DashboardDtos[]>{
        return this.repository.getQuantityProductDay(startDate, endDate);
    }
    
}