import { CategoryEntity } from "../../../Category";
import { MeasuresEntity } from "../../../Measures";
import { ProductEntityDtos } from "../../../Product";
import { CustomError } from "../../../Server";


export class OrderItemEntity {

    constructor(
        public id:number,
        public product:ProductEntityDtos,
        public measures:MeasuresEntity,
        public quantity:number,
        public price:number,
        public order_id:number,
    ){}

    static fromObject= (object:{[key:string]:any} ):OrderItemEntity => {
        const {id, product, measure, quantity, price, order_id} = object;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!quantity || isNaN(Number(quantity))){throw CustomError.badRequest('Id category must be a valid number')}
        if (!price || isNaN(Number(price))){throw CustomError.badRequest('Id product must be a valid number')}
        if (!order_id || isNaN(Number(order_id))){throw CustomError.badRequest('Id order must be a valid number')}
        const productEntity = ProductEntityDtos.fromObject(product);
        const measuresEntity = MeasuresEntity.fromObject(measure);
        return new OrderItemEntity(id, productEntity, measuresEntity, quantity, price, order_id);
    }
}