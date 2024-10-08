import { CustomError } from "../../../Server";


export class ProveedorEntity {

    constructor(
        public id:number,
        public repre:string,
        public ruc:string,
        public email:string,
        public phone:string,
        public address:string,
    ){}

    static fromObject= (object:{[key:string]:any} ):ProveedorEntity => {
        const {id, repre, ruc, email, phone, address,} = object;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!email){throw CustomError.badRequest('Missing email');}
        if (!repre){throw CustomError.badRequest('Missing representate');}
        if (!ruc){throw CustomError.badRequest('Missing ruc');}
        if (!address){throw CustomError.badRequest('Missing address');}
        if (!phone){throw CustomError.badRequest('Missing phone');}
        return new ProveedorEntity(id, repre, ruc, email, phone, address);
    }
}