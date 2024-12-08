import { CreateClientUseCase } from "../../../Types";
import { CreateClientDtos } from "../dtos/create.client.dtos";
import { ClientRepository } from "../repositories/client.repository";



export class CreateClient implements CreateClientUseCase {
    
    constructor(
        private readonly repository:ClientRepository,
    ){}
    execute(dto: CreateClientDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}