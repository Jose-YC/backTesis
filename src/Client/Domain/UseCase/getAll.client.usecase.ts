import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { UseCasePaginate, PaginateResponse } from "../../../Types";
import { ClientEntity } from "../Entity/client.entity";
import { ClientRepository } from "../repositories/client.repository";

export class GetAllClient implements UseCasePaginate<ClientEntity, PaginateDtos> {
    
    constructor(
        private readonly repository:ClientRepository,
    ){}
    execute(dtos:PaginateDtos): Promise<PaginateResponse<ClientEntity>>{
        return this.repository.getAll(dtos);
    }
    
}