import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { MeasuresDatasource } from "../../Domain/datasource/measures.datasource";
import { CreateMeasuresDtos } from "../../Domain/dtos/create.measures.dtos";
import { UpdateMeasuresDtos } from "../../Domain/dtos/update.measures.dtos";
import { MeasuresEntity } from "../../Domain/Entity/measures.entity";
import { MeasuresRepository } from "../../Domain/repositories/measures.repository";



export class MeasuresRepositoryImp implements MeasuresRepository {

    constructor(
        private readonly datasource:MeasuresDatasource,
    ){}

    create(createMeasures: CreateMeasuresDtos): Promise<Boolean> {
       return this.datasource.create(createMeasures);
    }
    getAll(dtos:PaginateDtos): Promise<PaginateResponse<MeasuresEntity>> {
        return this.datasource.getAll(dtos);
    }
    getSearch(dtos:PaginateDtos): Promise<PaginateResponse<MeasuresEntity>> {
        return this.datasource.getSearch(dtos);
    }
    getId(id: number): Promise<MeasuresEntity> {
        return this.datasource.getId(id);
    }
    update(updateMeasures: UpdateMeasuresDtos): Promise<Boolean> {
        return this.datasource.update(updateMeasures);
    }
    delete(id: number): Promise<Boolean> {
        return this.datasource.delete(id);
    }

}