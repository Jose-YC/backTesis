import { UseCase } from "../../../Types";
import { ClientEntity } from "../Entity/client.entity";
import { ClientRepository } from "../repositories/client.repository";

export class GetByIdClient implements UseCase<ClientEntity, string> {
    
    constructor(
        private readonly repository:ClientRepository,
    ){}
    execute(dni:string): Promise<ClientEntity> {
        return this.repository.getId(dni);
    }
    
}