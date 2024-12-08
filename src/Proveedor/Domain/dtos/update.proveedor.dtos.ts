import { regularExps } from "../../../config";
import { CustomError } from "../../../Server";

export class UpdateProveedorDtos {

    private constructor(
        public readonly id:number,
        public readonly repre:string,
        public readonly ruc:string,
        public readonly email:string,
        public readonly phone:string,
        public readonly address:string, 
    ){}

    get values(){
        const returnObj: {[key:string]: any}={}
        if (this.repre) returnObj.repre=this.repre;
        if (this.ruc) returnObj.ruc=this.ruc;
        if (this.email) returnObj.email=this.email;
        if (this.phone) returnObj.phone=this.phone;
        if (this.address) returnObj.address=this.address;
        
        return returnObj;
    }

    static create(props: {[key:string]:any}): [string?, UpdateProveedorDtos?]{
        const {id, repre, ruc, email, phone, address} = props;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!email){throw CustomError.badRequest('Missing email');}
        if (!repre){throw CustomError.badRequest('Missing representate');}
        if (!ruc){throw CustomError.badRequest('Missing ruc');}
        if (!address){throw CustomError.badRequest('Missing address');}
        if (!phone){throw CustomError.badRequest('Missing phone');}
        return [undefined, new UpdateProveedorDtos(id, repre, ruc, email, phone, address)]
    }
}