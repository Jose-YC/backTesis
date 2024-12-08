import { CustomError } from "../../../Server";

export class ProductEntityDtos {

    constructor(
        public id:number,
        public name:string,
        public description:string,
        public base_priece:number,
        public productImage:String[],
    ){}

    static fromObject= (object:{[key:string]:any} ):ProductEntityDtos => {
        const {id, name, description, base_priece, ProductImage} = object;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!base_priece|| isNaN(Number(base_priece))){throw CustomError.badRequest('Missing base_priece')};
        if (!name){throw CustomError.badRequest('Missing name');}
        if (!description){throw CustomError.badRequest('Missing description');}
        return new ProductEntityDtos(id, name, description, base_priece, ProductImage);
    }
}