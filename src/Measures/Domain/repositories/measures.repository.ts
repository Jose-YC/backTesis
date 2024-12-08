
import { PaginateDtos } from '../../../shared/domain/dto/pagination.dtos';
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateMeasuresDtos } from '../dtos/create.measures.dtos';
import { UpdateMeasuresDtos } from '../dtos/update.measures.dtos';
import { MeasuresEntity } from '../Entity/measures.entity';

export abstract class MeasuresRepository {
    abstract create(createMeasures:CreateMeasuresDtos):Promise<Boolean>;
    abstract getAll(dtos:PaginateDtos):Promise<PaginateResponse<MeasuresEntity>>;
    abstract getSearch(dtos:PaginateDtos):Promise<PaginateResponse<MeasuresEntity>>;
    abstract getId(id:number):Promise<MeasuresEntity>;
    abstract update(updateMeasures:UpdateMeasuresDtos):Promise<Boolean>;
    abstract delete(id:number):Promise<Boolean>;
}