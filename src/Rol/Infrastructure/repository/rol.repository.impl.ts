
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateRolDtos, RolDatasource, RolEntity, RolRepository, UpdateRolDtos } from "../../Domain";

export class RolRepositoryImp implements RolRepository {

    constructor(
        private readonly datasource:RolDatasource,
    ){}

    create(createRol: CreateRolDtos):Promise<Boolean> {
       return this.datasource.create(createRol);
    }
    getAll(dtos:PaginateDtos): Promise<PaginateResponse<RolEntity>> {
        return this.datasource.getAll(dtos);
    }
    getSearch(dtos:PaginateDtos): Promise<PaginateResponse<RolEntity>> {
        return this.datasource.getSearch(dtos);
    }
    getId(id: number): Promise<RolEntity> {
        return this.datasource.getId(id);
    }
    update(updateRol: UpdateRolDtos): Promise<Boolean> {
        return this.datasource.update(updateRol);
    }
    delete(id: number): Promise<Boolean> {
        return this.datasource.delete(id);
    }

}