import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateVentaDtos, DashboardDtos, VentaDatasource, VentaEntity, VentaEntityDtos, VentaRepository } from "../../Domain";

export class VentaRepositoryImp implements VentaRepository {

    constructor(
        private readonly datasource:VentaDatasource,
    ){}

    create(createVenta: CreateVentaDtos): Promise<Boolean> {
       return this.datasource.create(createVenta);
    }
    getAll(dtos:PaginateDtos): Promise<PaginateResponse<VentaEntity>> {
        return this.datasource.getAll(dtos);
    }
    getSearch(dtos:PaginateDtos): Promise<PaginateResponse<VentaEntity>> {
        return this.datasource.getSearch(dtos);
    }
    getId(id: number): Promise<VentaEntity> {
        return this.datasource.getId(id);
    }
    getIdDetails(id: number): Promise<VentaEntityDtos> {
        return this.datasource.getIdDetails(id);
    }
    
    getTotalMonth(startDate: Date, endDate: Date):Promise<DashboardDtos[]>{
        return this.datasource.getTotalMonth(startDate, endDate);
    };
    getTotalDay(startDate: Date, endDate: Date):Promise<DashboardDtos[]>{
        return this.datasource.getTotalDay(startDate, endDate);
    };
    getQuantitySaleDay(startDate: Date, endDate: Date):Promise<DashboardDtos[]>{
        return this.datasource.getQuantitySaleDay(startDate, endDate);
    };
    getPdf(id: number):Promise<PDFKit.PDFDocument>{
        return this.datasource.getPdf(id);
    }

}