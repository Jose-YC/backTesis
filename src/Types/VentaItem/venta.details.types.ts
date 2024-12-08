import { DashboardDtos } from "../../Venta"
import { DashboardDetailsDtos } from "../../VentaItem"


export interface CategoryMonthUseCase {
    execute(startDate: Date, endDate: Date):Promise<DashboardDetailsDtos[]>
}

export interface ProductTopUseCase {
    execute(startDate: Date, endDate: Date):Promise<DashboardDetailsDtos[]>
}

export interface ProductSaleUseCase {
    execute(startDate: Date, endDate: Date):Promise<DashboardDtos[]>
}

export interface QuantityProductDayUseCase {
    execute(startDate: Date, endDate: Date):Promise<DashboardDtos[]>
}