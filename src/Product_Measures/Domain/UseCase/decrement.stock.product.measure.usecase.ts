import { DecrementStockUseCase } from '../../../Types';
import { StockItemsProductDtos } from '../dtos/stock.product.measures.dtos';
import { DetalleProductMeasuresRepository } from '../repositories/product.measures.repository';


export class DecrementStockProductUseCase implements DecrementStockUseCase {
    
    constructor(
        private readonly repository:DetalleProductMeasuresRepository,
    ){}
    execute(dtos:StockItemsProductDtos): Promise<Boolean> {
        return this.repository.decrementStock(dtos);
    }
    
}