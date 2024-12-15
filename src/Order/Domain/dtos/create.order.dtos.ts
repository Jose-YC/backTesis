
import { OrderState } from "../../../Enum/enum";
import { CreateOrderItemDtos, OrderItemEntity } from "../../../OrderItem/Domain";
import { CustomError } from "../../../Server";

export class CreateOrderDtos {

    private constructor(
        public readonly provedor_id:number,
        public readonly itemsOrden:CreateOrderItemDtos[],

    ){}

    static create(props: {[key:string]:any}): [string?, CreateOrderDtos?]{
        const { provedor_id, itemsOrden } = props;
    
        if (!provedor_id|| isNaN(Number(provedor_id))) return ['Proveedor vacio'];
        const itemsOrdenEntity = itemsOrden.map((object:{[key:string]:any}) => {
            const [ error, itemsOrdendtos ] = CreateOrderItemDtos.create(object)
            if (error) return [error];
            return itemsOrdendtos;
        });
        return [undefined, new CreateOrderDtos(provedor_id, itemsOrdenEntity)] 
    }
}