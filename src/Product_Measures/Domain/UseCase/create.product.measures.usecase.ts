import { UseCase } from "../../../Types";
import { CreateDetalleProductMeasuresDtos } from "../dtos/create.product.measures.dtos";
import { DetalleProductMeasuresRepository } from "../repositories/product.measures.repository";


export class CreateDetalleProductMeasures implements UseCase<Boolean, CreateDetalleProductMeasuresDtos> {
    
    constructor(
        private readonly repository:DetalleProductMeasuresRepository,
    ){}
    execute(dto: CreateDetalleProductMeasuresDtos): Promise<Boolean> {
        return this.repository.create(dto);
    }
    
}