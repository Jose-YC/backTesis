import { ClientType } from "@prisma/client";
import { CustomError } from "../../../Server";


export class ClientEntity {

    constructor(
        public num_doc:string,
        public type:ClientType,
        public name:string,
        public email?:string,
        public phone?:string,
        public address?:string,
    ){}

    static fromObject= (object:{[key:string]:any} ):ClientEntity => {
        const {num_doc, type, name, email, phone, address} = object;
       
        if (!name){throw CustomError.badRequest('Missing name');}
        if (!num_doc){throw CustomError.badRequest('Missing numero de documento');}
        if (!type){throw CustomError.badRequest('Missing type');}

        return new ClientEntity(num_doc, type, name, email, phone, address);
    }
}