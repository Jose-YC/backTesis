
import { CreateVentaDtos, DashboardDtos, VentaEntity, VentaEntityDtos } from "../../Venta"

export interface CreateVentaUseCase {
    execute(dto:CreateVentaDtos):Promise<Boolean>
}

export interface TotalMonthUseCase {
    execute(startDate: Date, endDate: Date):Promise<DashboardDtos[]>
}
export interface CreateVentaPDFUseCase {
    execute(id:number):Promise<PDFKit.PDFDocument>
}

export interface TotalDayUseCase {
    execute(startDate: Date, endDate: Date):Promise<DashboardDtos[]>
}

export interface QuantitySaleDayUseCase {
    execute(startDate: Date, endDate: Date):Promise<DashboardDtos[]>
}

export interface GetByIdVentaDetailsUseCase {
    execute(id:number):Promise<VentaEntityDtos>
}

export interface GetByIdVentaUseCase {
    execute(id:number):Promise<VentaEntity>
}

export interface DeleteVentaUseCase {
    execute(id:number):Promise<Boolean>
}