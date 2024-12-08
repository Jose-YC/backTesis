
import { PaginateDtos } from '../../../shared/domain/dto/pagination.dtos';
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateClientDtos } from '../dtos/create.client.dtos';
import { UpdateClientDtos } from '../dtos/update.client.dtos';
import { ClientEntity } from '../Entity/client.entity';


export abstract class ClientDatasource {
    
    abstract create(createClient:CreateClientDtos):Promise<Boolean>;
    abstract getAll(dtos:PaginateDtos):Promise<PaginateResponse<ClientEntity>>;
    abstract getSearch(dtos:PaginateDtos):Promise<PaginateResponse<ClientEntity>>;
    abstract getId(dni:string):Promise<ClientEntity>;
    abstract update(updateClient:UpdateClientDtos):Promise<Boolean>;
    abstract delete(dni:string):Promise<Boolean>;
}