
export class UpdatePhotoDtos {

    private constructor(
        public readonly id:number,
        public readonly img:string,
        public readonly imgant?:string,
    ){}

    get values(){
        const returnObj: {[key:string]: any}={}
        if (this.img) returnObj.img=this.img;
        return returnObj;
    }

    static create(props: {[key:string]:any}): [string?, UpdatePhotoDtos?]{
        const { id, img, imgant } = props;
        if (!id || isNaN(Number(id))) return ['id must be a valid number']
        if (!img) return ['Missing image'];
        return [undefined, new UpdatePhotoDtos(id, img, imgant)]
    }
}