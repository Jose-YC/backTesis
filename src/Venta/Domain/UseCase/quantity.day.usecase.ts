import {  QuantitySaleDayUseCase } from "../../../Types";
import { DashboardDtos } from "../dtos/dashboard.dtos";
import { VentaRepository } from "../repositories/venta.repository";

export class QuantitySaleDay implements QuantitySaleDayUseCase {
    
    constructor(
        private readonly repository:VentaRepository,
    ){}
    execute(startDate: Date, endDate: Date): Promise<DashboardDtos[]>{
        return this.repository.getQuantitySaleDay(startDate, endDate);
    }
}