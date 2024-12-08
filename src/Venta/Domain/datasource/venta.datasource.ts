
import { PaginateDtos } from '../../../shared/domain/dto/pagination.dtos';
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateVentaDtos } from '../dtos/create.venta.dtos';
import { DashboardDtos } from '../dtos/dashboard.dtos';
import { VentaEntityDtos } from '../dtos/venta.entity.dtos';
import { VentaEntity } from '../Entity/venta.entity';


export abstract class VentaDatasource {
    
    abstract create(createVenta:CreateVentaDtos):Promise<Boolean>;
    abstract getAll(dtos:PaginateDtos):Promise<PaginateResponse<VentaEntity>>;
    abstract getSearch(dtos:PaginateDtos):Promise<PaginateResponse<VentaEntity>>;
    abstract getId(id:number):Promise<VentaEntity>;
    abstract getIdDetails(id:number):Promise<VentaEntityDtos>;
    abstract getTotalMonth(startDate: Date, endDate: Date):Promise<DashboardDtos[]>;
    abstract getTotalDay(startDate: Date, endDate: Date):Promise<DashboardDtos[]>;
    abstract getQuantitySaleDay(startDate: Date, endDate: Date):Promise<DashboardDtos[]>;
    abstract getPdf(id: number):Promise<PDFKit.PDFDocument>;
}