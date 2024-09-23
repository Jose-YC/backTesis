

export class URLEntity {

    constructor(
        public id:number,
        public url_short:string,
        public url_original:string,
        public option:boolean,
        public password?:string,
        public userId?:number,
    ){}

    static fromObject= (object:{[key:string]:any} ):URLEntity => {
        const {id, url_short, url_original, option, password, user} = object;
        if (!url_short) ['Missing url short'];
        if (!url_original) ['Missing url original'];
        if (!url_original) ['Missing url original'];
        if (!option) ['Missing option'];

        if (password && password.length <= 4) ['Missing password weak'];
        if (user && !Number.isInteger(user.id)) ['Missing invalid identifier'];
        
        return new URLEntity(id, url_short, url_original, password, user.id);
    }
}