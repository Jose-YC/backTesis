
export class UpdateURLDtos {

    private constructor(
        public readonly id:number,
        public readonly url_original:string,
        public readonly option?:boolean,
        public readonly password?:string,
        public readonly userId?:number,
    ){}

    get values(){
        const returnObj: {[key:string]: any}={}
        if (this.url_original) returnObj.url_original=this.url_original;
        if (this.password) returnObj.password=this.password;
        if (this.userId) returnObj.userId=this.userId;
        if (this.option) returnObj.option=this.option;
        return returnObj;
    }

    static create(props: {[key:string]:any}): [string?, UpdateURLDtos?]{
        const {id, url_original, password, user} = props;
        if (!id || isNaN(Number(id))) return ['id must be a valid number']
        if (!url_original) return ['Missing url original'];

        if (password && password.length <= 4) return ['Missing password weak'];
        if (user && !Number.isInteger(user.id)) return ['Missing invalid identifier'];
        
        return [undefined, new UpdateURLDtos(id, url_original, password, user.id)]
    }
}