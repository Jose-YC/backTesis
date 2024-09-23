import { GetByIdURLUseCase } from "../../../Types/URL/url.types";
import { URLEntity, URLRepository } from "../";

export class GetByIdURL implements GetByIdURLUseCase {
    

    constructor(
        private readonly repository:URLRepository,
    ){}
    execute(id:number): Promise<URLEntity> {
        return this.repository.getId(id);
    }
    
}