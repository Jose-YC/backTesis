import { UseCase } from "../../../Types";
import { UpdateClientDtos } from "../dtos/update.client.dtos";
import { ClientRepository } from "../repositories/client.repository";

export class UpdateClient implements UseCase<Boolean, UpdateClientDtos> {

    constructor(
        private readonly repository:ClientRepository,
    ){}
    execute(dtos:UpdateClientDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}