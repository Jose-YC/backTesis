import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { ClientDatasource } from "../../Domain/datasource/client.datasource";
import { CreateClientDtos } from "../../Domain/dtos/create.client.dtos";
import { UpdateClientDtos } from "../../Domain/dtos/update.client.dtos";
import { ClientEntity } from "../../Domain/Entity/client.entity";
import { ClientRepository } from "../../Domain/repositories/client.repository";


export class ClientRepositoryImp implements ClientRepository {

    constructor(
        private readonly datasource:ClientDatasource,
    ){}

    create(createClient: CreateClientDtos): Promise<Boolean> {
       return this.datasource.create(createClient);
    }
    getAll(dtos:PaginateDtos): Promise<PaginateResponse<ClientEntity>> {
        return this.datasource.getAll(dtos);
    }
    getSearch(dtos:PaginateDtos): Promise<PaginateResponse<ClientEntity>> {
        return this.datasource.getSearch(dtos);
    }
    getId(dni: string): Promise<ClientEntity> {
        return this.datasource.getId(dni);
    }
    update(updateClient: UpdateClientDtos): Promise<Boolean> {
        return this.datasource.update(updateClient);
    }
    delete(dni: string): Promise<Boolean> {
        return this.datasource.delete(dni);
    }

}