import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { URLEntity, URLRepository } from "../";
import { GetAllIdURLUseCase, PaginateResponse } from "../../../Types/Pagination/pagination.type";

export class GetAllUserURL implements GetAllIdURLUseCase {
    

    constructor(
        private readonly repository:URLRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<URLEntity>>{
        return this.repository.getAllUserURL(dtos);
    }
    
}