import { regularExps } from "../../../config";

export class RegisterDtos {

    private constructor(
        public readonly email:string,
        public readonly name:string,
        public readonly lastname:string,
        public readonly phone:string,
        public readonly password:string, 
    ){}

    static create(props: {[key:string]:any}): [string?, RegisterDtos?]{
        const {email, name, lastname, phone, password} = props;
        if (!email) return ['Missing email'];
        if (!regularExps.email.test(email)) return ['Email is not valid'];
        if (!password) return ['Missing password'];
        if (password.length < 6) return ['Password to short'];
        if (!name) return ['Missing name'];
        if (!lastname) return ['Missing last name'];
        if (!phone) return['Missing phone'];
        return [undefined, new RegisterDtos(email, name, lastname, phone, password)]
    }
}