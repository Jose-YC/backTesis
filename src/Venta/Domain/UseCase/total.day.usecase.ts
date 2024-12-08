import {  TotalDayUseCase } from "../../../Types";
import { DashboardDtos } from "../dtos/dashboard.dtos";
import { VentaRepository } from "../repositories/venta.repository";

export class TotalDay implements TotalDayUseCase {
    
    constructor(
        private readonly repository:VentaRepository,
    ){}
    execute(startDate: Date, endDate: Date): Promise<DashboardDtos[]>{
        return this.repository.getTotalDay(startDate, endDate);
    }
}