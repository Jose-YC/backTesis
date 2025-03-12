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
        console.log(object);
        if (isNaN(Number(id))) {throw CustomError.badRequest('El identificador debe ser un número válido')}
        if (isNaN(Number(measures_id))) {throw CustomError.badRequest('El identificador de la medida debe ser un número válido')}
        if (isNaN(Number(product_id))) {throw CustomError.badRequest('El identificador del producto debe ser un número válido')}
        if (isNaN(Number(stock))) {throw CustomError.badRequest('El stock debe ser un número válido')}
        if (isNaN(Number(price))) {throw CustomError.badRequest('El precio debe ser un número válido')}
        return new DetalleProductMeasuresEntityDtos( id, measures_id, product_id, stock, price, income );
    }
}