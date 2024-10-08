
export class UpdatePasswordDtos {

    private constructor(
        public readonly id:number, 
        public readonly password:string, 
        public readonly oldPassword:string, 
    ){}

    static create(props: {[key:string]:any}): [string?, UpdatePasswordDtos?]{
        const {password, oldPassword, id } = props;
        if (id && isNaN(id)) return ['Invalid identifier'];
        if (!password) return ['Password 1'];
        if (!oldPassword) return ['Password 2'];
        if (password.length < 6) return ['Password to short'];
        if (oldPassword.length < 6) return ['Incorrect password'];
        return [undefined, new UpdatePasswordDtos(id, password, oldPassword)] 
    }
}