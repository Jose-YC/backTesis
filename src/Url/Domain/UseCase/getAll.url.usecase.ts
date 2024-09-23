import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { URLEntity, URLRepository } from "../";
import { GetAllURLUseCase, PaginateResponse } from "../../../Types/Pagination/pagination.type";

export class GetAllURL implements GetAllURLUseCase {
    

    constructor(
        private readonly repository:URLRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<URLEntity>>{
        return this.repository.getAll(dtos);
    }
    
}