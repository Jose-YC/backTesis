
import { CreateMeasuresDtos, MeasuresEntity, UpdateMeasuresDtos } from "../../Measures"

export interface UpdateMeasuresUseCase {
    execute(dtos:UpdateMeasuresDtos):Promise<Boolean>
}

export interface CreateMeasuresUseCase {
    execute(dto:CreateMeasuresDtos):Promise<Boolean>
}


export interface GetByIdMeasuresUseCase {
    execute(id:number):Promise<MeasuresEntity>
}

export interface DeleteMeasuresUseCase {
    execute(id:number):Promise<Boolean>
}