
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { DashboardDtos } from '../../../Venta/Domain';
import { DashboardDetailsDtos } from '../dtos/dashboard.details.dtos';
import {  VentaItemEntity } from '../Entity/venta.details.entity';

export abstract class VentaItemRepository {
    abstract getAll(id:number):Promise<PaginateResponse<VentaItemEntity>>;
    
    abstract getCategoryMonth(startDate: Date, endDate: Date):Promise<DashboardDetailsDtos[]>;
    abstract getProductTop(startDate: Date, endDate: Date):Promise<DashboardDetailsDtos[]>;
    abstract getProductSale(startDate: Date, endDate: Date):Promise<DashboardDtos[]>;
    abstract getQuantityProductDay(startDate: Date, endDate: Date):Promise<DashboardDtos[]>;
}