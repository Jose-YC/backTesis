import { OrderState } from "../../../Enum/enum";
import { CustomError } from "../../../Server";

export class UpdateOrderDtos {

    private constructor(
        public readonly id:number,
        public readonly state: OrderState,
    ){}

    get values(){
        const returnObj: {[key:string]: any}={}
        if (this.state) returnObj.state=this.state;
        if (returnObj.state === 'DELIVERED') returnObj.deliveredAt=new Date();
        
        return returnObj;
    }

    static create(props: {[key:string]:any}): [string?, UpdateOrderDtos?]{
        const { id, state } = props;
        
        if (!id || isNaN(Number(id))) return ['Codigo no valido']
        if (!state) return ['Estado Vacio']
        
        return [undefined, new UpdateOrderDtos(id, state)]
    }
}