import { CategoryEntity } from "../../../Category";
import { MeasuresEntity } from "../../../Measures";
import { ProductEntityDtos } from "../../../Product";
import { CustomError } from "../../../Server";


export class VentaItemEntity {

    constructor(
        public id:number,
        public product:ProductEntityDtos,
        public measures:MeasuresEntity,
        public quantity:number,
        public price:number,
        public income:number,
        public venta_id:number,
    ){}

    static fromObject= (object:{[key:string]:any} ):VentaItemEntity => {
        const {id, product, measure, quantity, price, income, venta_id} = object;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!quantity || isNaN(Number(quantity))){throw CustomError.badRequest('Id category must be a valid number')}
        if (!price || isNaN(Number(price))){throw CustomError.badRequest('Id product must be a valid number')}
        if (!venta_id || isNaN(Number(venta_id))){throw CustomError.badRequest('Id venta must be a valid number')}
        const productEntity = ProductEntityDtos.fromObject(product);
        const measuresEntity = MeasuresEntity.fromObject(measure);
        return new VentaItemEntity(id, productEntity, measuresEntity, quantity, price, income, venta_id);
    }
}