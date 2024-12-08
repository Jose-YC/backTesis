import { regularExps } from "../../../config";
import { CustomError } from "../../../Server";

export class CreateProveedorDtos {

    private constructor(
        public readonly repre:string,
        public readonly ruc:string,
        public readonly email:string,
        public readonly phone:string,
        public readonly address:string, 
    ){}

    static create(props: {[key:string]:any}): [string?, CreateProveedorDtos?]{
        const {repre, ruc, email, phone, address} = props;
        if (!email){throw CustomError.badRequest('Missing email');}
        if (!repre){throw CustomError.badRequest('Missing representate');}
        if (!ruc){throw CustomError.badRequest('Missing ruc');}
        if (!address){throw CustomError.badRequest('Missing address');}
        if (!phone){throw CustomError.badRequest('Missing phone');}
        return [undefined, new CreateProveedorDtos(repre, ruc, email, phone, address,)] 
    }
}