import { MeasuresEntity } from "../../../Measures";
import { CustomError } from "../../../Server";


export class DetalleProductMeasuresEntity {

    constructor(
        public id:number,
        public measures:MeasuresEntity,
        public measures_id:number,
        public product_id:number,
        public stock:number,
        public min_stock:number,
        public price:number,
        public income:number,
    ){}

    static fromObject= (object:{[key:string]:any} ):DetalleProductMeasuresEntity => {
        const { id, measures, measures_id, product_id, stock, min_stock, price, income} = object;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Id must be a valid number')};
        if (!measures_id|| isNaN(Number(measures_id))){throw CustomError.badRequest('Id measures must be a valid number')};
        if (stock && isNaN(Number(stock))){throw CustomError.badRequest('Missing stock')};
        if (min_stock && isNaN(Number(min_stock))){throw CustomError.badRequest('Missing minimum stock')};
        if (!price || isNaN(Number(price))){throw CustomError.badRequest('price must be a valid number')};
        if (!product_id || isNaN(Number(product_id))){throw CustomError.badRequest('Id product must be a valid number')};
        const measuresEntity = MeasuresEntity.fromObject(measures);
        return new DetalleProductMeasuresEntity(id, measuresEntity, measures_id, product_id, stock, min_stock, price, income);
    }
}