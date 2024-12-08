
import { DeleteClientUseCase } from "../../../Types";
import { ClientRepository } from "../repositories/client.repository";

export class DeleteClient implements DeleteClientUseCase {
    
    constructor(
        private readonly repository:ClientRepository,
    ){}
    execute(dni:string): Promise<Boolean> {
        return this.repository.delete(dni);
    }
    
}