import { UseCaseDetails } from "../../../Types";
import { DashboardDetailsDtos } from "../dtos/dashboard.details.dtos";
import { VentaItemRepository } from "../repositories/venta.details.repository";


export class ProductTop implements UseCaseDetails<DashboardDetailsDtos[], Date, Date> {
    
    constructor(
        private readonly repository:VentaItemRepository,
    ){}
    execute(startDate: Date, endDate: Date): Promise<DashboardDetailsDtos[]>{
        return this.repository.getProductTop(startDate, endDate);
    }
    
}