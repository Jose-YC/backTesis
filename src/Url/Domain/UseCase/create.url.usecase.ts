import { CreateURLUseCase } from "../../../Types/URL/url.types";
import { CreateURLDtos, URLRepository } from "../";

export class CreateURL implements CreateURLUseCase {
    constructor(
        private readonly repository:URLRepository,
    ){}
    execute(dto: CreateURLDtos): Promise<String> {
        return this.repository.create(dto);
    }
    
}