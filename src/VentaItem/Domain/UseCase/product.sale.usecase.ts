import { UseCaseDetails } from "../../../Types";
import { DashboardDtos } from "../../../Venta/Domain";
import { VentaItemRepository } from "../repositories/venta.details.repository";


export class ProductSale implements UseCaseDetails<DashboardDtos[], Date, Date> {
    
    constructor(
        private readonly repository:VentaItemRepository,
    ){}
    execute(startDate: Date, endDate: Date): Promise<DashboardDtos[]>{
        return this.repository.getProductSale(startDate, endDate);
    }
    
}