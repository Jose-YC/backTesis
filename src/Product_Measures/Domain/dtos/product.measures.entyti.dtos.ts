import { CustomError } from "../../../Server";


export class DetalleProductMeasuresEntityDtos {

    constructor(
        public id:number,
        public measures_id:number,
        public product_id:number,
        public stock:number,
        public price:number,
        public income:number,
    ){}

    static fromObject= (object:{[key:string]:any} ):DetalleProductMeasuresEntityDtos => {
        const { id, measures_id, stock, product_id, price, income } = object;
        if (!id || isNaN(Number(id))) {throw CustomError.badRequest('Id must be a valid number')}
        if (!measures_id || isNaN(Number(measures_id))) {throw CustomError.badRequest('Id measure must be a valid number')}
        if (product_id && isNaN(Number(product_id))) {throw CustomError.badRequest('Id product must be a valid number')}
        if (!stock || isNaN(Number(stock))) {throw CustomError.badRequest('value must be a valid number')}
        if (!price || isNaN(Number(price))) {throw CustomError.badRequest('price must be a valid number')}
        return new DetalleProductMeasuresEntityDtos( id, measures_id, product_id, stock, price, income );
    }
}