import { UseCase } from "../../../Types";
import { UpdateDetalleProductMeasuresDtos } from "../dtos/update.product.measures.dtos";
import { DetalleProductMeasuresRepository } from "../repositories/product.measures.repository";

export class UpdateDetalleProductMeasures implements UseCase<Boolean, UpdateDetalleProductMeasuresDtos> {

    constructor(
        private readonly repository:DetalleProductMeasuresRepository,
    ){}
    execute(dtos:UpdateDetalleProductMeasuresDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}