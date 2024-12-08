
import { PaginateDtos } from '../../../shared/domain/dto/pagination.dtos';
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateDetalleProductMeasuresDtos } from '../dtos/create.product.measures.dtos';
import { StockItemsProductDtos } from '../dtos/stock.product.measures.dtos';
import { UpdateDetalleProductMeasuresDtos } from '../dtos/update.product.measures.dtos';
import { DetalleProductMeasuresEntity } from '../Entity/product.measures.entity';



export abstract class DetalleProductMeasuresDatasource {
    
    abstract create(createDetalleProductMeasures:CreateDetalleProductMeasuresDtos):Promise<Boolean>;
    abstract getId(product_id: number, measures_id: number):Promise<DetalleProductMeasuresEntity>;
    abstract update(updateDetalleProductMeasures:UpdateDetalleProductMeasuresDtos):Promise<Boolean>;
    abstract incrementStock(productStock:StockItemsProductDtos):Promise<Boolean>;
    abstract decrementStock(productStock:StockItemsProductDtos):Promise<Boolean>;
}