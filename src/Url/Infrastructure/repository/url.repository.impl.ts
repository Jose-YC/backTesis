import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateURLDtos, UpdateURLDtos, URLDatasource, URLEntity, URLRepository } from "../../Domain";

export class URLRepositoryImp implements URLRepository {

    constructor(
        private readonly datasource:URLDatasource,
    ){}

    create(CreateURL: CreateURLDtos): Promise<String> {
       return this.datasource.create(CreateURL);
    }
    getAll(dtos:PaginateDtos): Promise<PaginateResponse<URLEntity>> {
        return this.datasource.getAll(dtos);
    }
    getAllUserURL(dtos:PaginateDtos): Promise<PaginateResponse<URLEntity>> {
        return this.datasource.getAllUserURL(dtos);
    }
    getId(id: number): Promise<URLEntity> {
        return this.datasource.getId(id);
    }
    update(updateURL: UpdateURLDtos): Promise<Boolean> {
        return this.datasource.update(updateURL);
    }
    delete(id: number): Promise<Boolean> {
        return this.datasource.delete(id);
    }

}