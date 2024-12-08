import { ClientEntity, CreateClientDtos, UpdateClientDtos } from "../../Client"

export interface UpdateClientUseCase {
    execute(dtos:UpdateClientDtos):Promise<Boolean>
}

export interface CreateClientUseCase {
    execute(dto:CreateClientDtos):Promise<Boolean>
}


export interface GetByIdClientUseCase {
    execute(dni:string):Promise<ClientEntity>
}

export interface DeleteClientUseCase {
    execute(dni:string):Promise<Boolean>
}