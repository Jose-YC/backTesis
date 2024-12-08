import { UpdateDetalleProductMeasuresUseCase } from "../../../Types";
import { UpdateDetalleProductMeasuresDtos } from "../dtos/update.product.measures.dtos";
import { DetalleProductMeasuresRepository } from "../repositories/product.measures.repository";

export class UpdateDetalleProductMeasures implements UpdateDetalleProductMeasuresUseCase {

    constructor(
        private readonly repository:DetalleProductMeasuresRepository,
    ){}
    execute(dtos:UpdateDetalleProductMeasuresDtos): Promise<Boolean> {
        return this.repository.update(dtos);
    }
    
}