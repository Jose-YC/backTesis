import { UseCase } from '../../../Types';
import { StockItemsProductDtos } from '../dtos/stock.product.measures.dtos';
import { DetalleProductMeasuresRepository } from '../repositories/product.measures.repository';


export class IncrementStockProductUseCase implements UseCase<Boolean, StockItemsProductDtos> {
    
    constructor(
        private readonly repository:DetalleProductMeasuresRepository,
    ){}
    execute(dtos:StockItemsProductDtos): Promise<Boolean> {
        return this.repository.incrementStock(dtos);
    }
    
}