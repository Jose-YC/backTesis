
export class CreateURLDtos {

    private constructor(
        public readonly url_original:string,
        public readonly option:boolean,
        public readonly password?:string,
        public readonly userId?:number,
    ){}

    static create(props: {[key:string]:any}): [string?, CreateURLDtos?]{
        const {url_original, option, password, user={}} = props;

        if (!url_original) return ['Missing url original'];
        if (!url_original) return ['Missing url original'];
        if (!option) return ['Missing option'];
       
        if (option && option==='false' && password.length <= 4) return ['Missing password weak'];
        if (user && !Number.isInteger(user.id)) return ['Missing invalid identifier'];

        return [undefined, new CreateURLDtos( url_original, !!option, password, user.id)]
    }
}