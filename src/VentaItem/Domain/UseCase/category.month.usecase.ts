import { CategoryMonthUseCase } from "../../../Types";
import { DashboardDetailsDtos } from "../dtos/dashboard.details.dtos";
import { VentaItemRepository } from "../repositories/venta.details.repository";


export class CategoryMonth implements CategoryMonthUseCase {
    
    constructor(
        private readonly repository:VentaItemRepository,
    ){}
    execute(startDate: Date, endDate: Date): Promise<DashboardDetailsDtos[]>{
        return this.repository.getCategoryMonth(startDate, endDate);
    }
    
}