import { regularExps } from "../../../config";
import { ClientType } from "../../../Enum/enum";
import { CustomError } from "../../../Server";

export class CreateClientDtos {

    private constructor(
        public readonly num_doc:string,
        public readonly type:ClientType,
        public readonly name:string,
        public readonly email?:string,
        public readonly phone?:string,
        public readonly address?:string,
    ){}

    static create(props: {[key:string]:any}): [string?, CreateClientDtos?]{
        const { num_doc, type, name, email, phone, address } = props;
        if (!name){throw CustomError.badRequest('Missing name');}
        if (!num_doc){throw CustomError.badRequest('Missing numero de documento');}
        if (!type){throw CustomError.badRequest('Missing type');}
        return [undefined, new CreateClientDtos( num_doc, type, name, email, phone, address )] 
    }
}