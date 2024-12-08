import { ProductSaleUseCase } from "../../../Types";
import { DashboardDtos } from "../../../Venta/Domain";
import { VentaItemRepository } from "../repositories/venta.details.repository";


export class ProductSale implements ProductSaleUseCase {
    
    constructor(
        private readonly repository:VentaItemRepository,
    ){}
    execute(startDate: Date, endDate: Date): Promise<DashboardDtos[]>{
        return this.repository.getProductSale(startDate, endDate);
    }
    
}