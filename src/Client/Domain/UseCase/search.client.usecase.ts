import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { GetAllClientUseCase, PaginateResponse } from "../../../Types";
import { ClientEntity } from "../Entity/client.entity";
import { ClientRepository } from "../repositories/client.repository";

export class SearchClient implements GetAllClientUseCase {
    
    constructor(
        private readonly repository:ClientRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<ClientEntity>>{
        return this.repository.getSearch(dtos);
    }
}