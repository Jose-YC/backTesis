import { DeleteURLUseCase } from "../../../Types/URL/url.types";
import { URLRepository } from "../repositories/url.repository";

export class DeleteURL implements DeleteURLUseCase {
    

    constructor(
        private readonly repository:URLRepository,
    ){}
    execute(id:number): Promise<Boolean> {
        return this.repository.delete(id);
    }
    
}