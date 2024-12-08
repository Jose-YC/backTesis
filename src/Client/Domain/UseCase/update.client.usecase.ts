import { UpdateClientUseCase } from "../../../Types";
import { UpdateClientDtos } from "../dtos/update.client.dtos";
import { ClientRepository } from "../repositories/client.repository";

export class UpdateClient implements UpdateClientUseCase {

    constructor(
        private readonly repository:ClientRepository,
    ){}
    execute(dtos:UpdateClientDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}