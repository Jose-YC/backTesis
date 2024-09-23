import { regularExps } from "../../../config";

export class CreateUserDtos {

    private constructor(
        public readonly email:string,
        public readonly name:string,
        public readonly lastname:string,
        public readonly phone:string,
        public readonly password:string, 
        public readonly rolName:string,
    ){}

    static create(props: {[key:string]:any}): [string?, CreateUserDtos?]{
        const {email, name, lastname, phone, password, rolName} = props;
        if (!name) return ['Missing name'];
        if (!rolName) return ['Missing rol'];
        if (!regularExps.email.test(email)) return ['Email is not valid'];
        if (!password) return ['Missing password'];
        if (password.length < 6) return ['Password to short'];
        if (!lastname) return ['Missing last name'];
        if (!phone) return['Missing phone'];
        return [undefined, new CreateUserDtos(email, name, lastname, phone, password, rolName)] 
    }
}