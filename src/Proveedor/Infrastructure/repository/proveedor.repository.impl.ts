import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateProveedorDtos, ProveedorDatasource, ProveedorEntity, 
         ProveedorRepository, UpdateProveedorDtos } from "../../Domain";


export class ProveedorRepositoryImp implements ProveedorRepository {

    constructor(
        private readonly datasource:ProveedorDatasource,
    ){}

    create(createProveedor: CreateProveedorDtos): Promise<Boolean> {
       return this.datasource.create(createProveedor);
    }
    getAll(dtos:PaginateDtos): Promise<PaginateResponse<ProveedorEntity>> {
        return this.datasource.getAll(dtos);
    }
    getSearch(dtos:PaginateDtos): Promise<PaginateResponse<ProveedorEntity>> {
        return this.datasource.getSearch(dtos);
    }
    getId(id: number): Promise<ProveedorEntity> {
        return this.datasource.getId(id);
    }
    update(updateProveedor: UpdateProveedorDtos): Promise<Boolean> {
        return this.datasource.update(updateProveedor);
    }
    delete(id: number): Promise<Boolean> {
        return this.datasource.delete(id);
    }

}