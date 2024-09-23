import { UpdateURLUseCase } from "../../../Types/URL/url.types";
import { UpdateURLDtos, URLRepository } from "../";

export class UpdateURL implements UpdateURLUseCase {
    
    constructor(
        private readonly repository:URLRepository,
    ){}
    execute(dtos:UpdateURLDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}