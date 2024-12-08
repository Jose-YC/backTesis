import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { DashboardDtos } from "../../../Venta/Domain";
import { DashboardDetailsDtos } from "../../Domain";
import { VentaItemDatasource } from "../../Domain/datasource/venta.details.datasource";
import { VentaItemEntity } from "../../Domain/Entity/venta.details.entity";
import { VentaItemRepository } from "../../Domain/repositories/venta.details.repository";



export class VentaItemRepositoryImp implements VentaItemRepository {

    constructor(
        private readonly datasource:VentaItemDatasource,
    ){}

    getAll(id:number): Promise<PaginateResponse<VentaItemEntity>> {
        return this.datasource.getAll(id);
    }
    getCategoryMonth(startDate: Date, endDate: Date): Promise<DashboardDetailsDtos[]> {
        return this.datasource.getCategoryMonth(startDate, endDate);
    }
    getProductTop(startDate: Date, endDate: Date): Promise<DashboardDetailsDtos[]> {
        return this.datasource.getProductTop(startDate, endDate);
    }
    getProductSale(startDate: Date, endDate: Date): Promise<DashboardDtos[]> {
        return this.datasource.getProductSale(startDate, endDate);
    }
    getQuantityProductDay(startDate: Date, endDate: Date): Promise<DashboardDtos[]> {
        return this.datasource.getQuantityProductDay(startDate, endDate);
    }

}