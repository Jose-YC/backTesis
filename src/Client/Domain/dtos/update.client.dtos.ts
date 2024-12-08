import { regularExps } from "../../../config";
import { ClientType } from "../../../Enum/enum";
import { CustomError } from "../../../Server";

export class UpdateClientDtos {

    private constructor(
        public readonly num_doc:string,
        public readonly type:ClientType,
        public readonly name:string,
        public readonly email?:string,
        public readonly phone?:string,
        public readonly address?:string,
    ){}

    get values(){
        const returnObj: {[key:string]: any}={}
        if (this.type) returnObj.type=this.type;
        if (this.name) returnObj.name=this.name;
        if (this.email) returnObj.email=this.email;
        if (this.phone) returnObj.phone=this.phone;
        if (this.address) returnObj.address=this.address;
        
        return returnObj;
    }

    static create(props: {[key:string]:any}): [string?, UpdateClientDtos?]{
        const { num_doc, type, name, email, phone, address } = props;

        if (!name){throw CustomError.badRequest('Missing name');}
        if (!num_doc){throw CustomError.badRequest('Missing numero de documento');}
        if (!type){throw CustomError.badRequest('Missing type');}

        return [undefined, new UpdateClientDtos( num_doc, type, name, email, phone, address )]
    }
}