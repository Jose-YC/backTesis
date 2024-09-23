
export class UpdateProfileDtos {

    private constructor(
        public readonly id:number,
        public readonly name?:string,
        public readonly lastname?:string,
        public readonly phone?:string,
    ){}

    get values(){
        const returnObj: {[key:string]: any}={}
        if (this.name) returnObj.name=this.name;
        if (this.lastname) returnObj.lastname=this.lastname;
        if (this.phone) returnObj.phone=this.phone;
        return returnObj;
    }

    static create(props: {[key:string]:any}): [string?, UpdateProfileDtos?]{
        const {id, name, lastname, phone } = props;
        if (!id || isNaN(Number(id))) return ['id must be a valid number'];
        if (!name) return ['Missing name'];
        if (!lastname) return ['Missing last name'];
        if (!phone) return['Missing phone'];
        
        return [undefined, new UpdateProfileDtos(id, name, lastname, phone)]
    }
}