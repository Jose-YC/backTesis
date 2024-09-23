import { regularExps } from "../../../config";

export class UpdateUserDtos {

    private constructor(
        public readonly id:number,
        public readonly name:string,
        public readonly lastname:string,
        public readonly phone:string,
        public readonly email?:string,
        public readonly password?:string, 
        public readonly rolName?:string,
    ){}

    get values(){
        const returnObj: {[key:string]: any}={}
        if (this.email) returnObj.email=this.email;
        if (this.name) returnObj.name=this.name;
        if (this.lastname) returnObj.rolId=this.lastname;
        if (this.phone) returnObj.rolId=this.phone;
        if (this.password) returnObj.password=this.password;
        if (this.rolName) returnObj.rolId=this.rolName;
        return returnObj;
    }

    static create(props: {[key:string]:any}): [string?, UpdateUserDtos?]{
        const {id, email, name, lastname, phone, password, rolName} = props;

        if (!id || isNaN(Number(id))) return ['id must be a valid number']
        if (regularExps.email.test(email)) return ['Email is not valid'];
        if (!name) ['Missing name'];
        if (!rolName) ['Missing rol'];
        if (!password) ['Missing password'];
        if (password.length < 6) return ['Password to short'];
        if (!lastname) return ['Missing last name'];
        if (!phone) return['Missing phone'];
        return [undefined, new UpdateUserDtos(id, name, lastname, phone, email, password, rolName)]
    }
}