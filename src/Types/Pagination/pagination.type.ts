
import { ClientEntity } from "../../Client";
import { MeasuresEntity } from "../../Measures";
import { OrderEntity } from "../../Order";
import { OrderItemEntity } from "../../OrderItem/Domain";
import { ProductEntity, ProductEntityDtos } from "../../Product";
import { DetalleProductCategoryEntity } from "../../Product_Category";
import { DetalleProductMeasuresEntity } from "../../Product_Measures";
import { ProveedorEntity } from "../../Proveedor";
import { RolEntity } from "../../Rol";
import { UserEntity } from "../../User";
import { VentaEntity } from "../../Venta";
import { VentaItemEntity } from "../../VentaItem";
import { PaginateDtos } from "../../shared/domain/dto/pagination.dtos";

export interface PaginateResponse<T> {
    total?: number,
    data: T[],
}

export interface GetAllRolUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<RolEntity>>
}

export interface GetAllOrderItemUseCase {
    execute(id:number):Promise<PaginateResponse<OrderItemEntity>>
}

export interface GetAllVentaItemUseCase {
    execute(id:number):Promise<PaginateResponse<VentaItemEntity>>
}

export interface GetAllVentaUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<VentaEntity>>
}

export interface GetAllOrderUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<OrderEntity>>
}

export interface GetAllProductUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<ProductEntity>>
}

export interface GetAllProductDtosUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<ProductEntityDtos>>
}

export interface GetAllDetalleProductCategoryUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<DetalleProductCategoryEntity>>
}

export interface GetAllDetalleProductMeasuresUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<DetalleProductMeasuresEntity>>
}

export interface GetAllMeasuresUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<MeasuresEntity>>
}

export interface GetAllProveedorUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<ProveedorEntity>>
}

export interface GetAllClientUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<ClientEntity>>
}

export interface GetAllCategoryUseCase {
    execute(dtos:PaginateDtos):Promise<any>
}
export interface GetAllUserUseCase {
    execute(dtos:PaginateDtos):Promise<PaginateResponse<UserEntity>>
}
