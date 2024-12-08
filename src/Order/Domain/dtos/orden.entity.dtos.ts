import { OrderState } from "../../../Enum/enum";
import { OrderItemEntity } from "../../../OrderItem";
import { ProveedorEntity } from "../../../Proveedor";
import { CustomError } from "../../../Server";
import { formatDate } from '../../../config/regularexp';

export class OrderEntityDtos {

    constructor(
        public id:number,
        public total:number,
        public itemsInOrder:number,
        public state:OrderState,
        public proveedor:ProveedorEntity,
        public items:OrderItemEntity[],
        public deliveredAt?:String,

        
    ){}
    
    static fromObject= (object:{[key:string]:any} ):OrderEntityDtos => {
        const {id, total, itemsInOrder, state, proveedor, deliveredAt, OrderItem} = object;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!itemsInOrder|| isNaN(Number(itemsInOrder))){throw CustomError.badRequest('Missing itemsInOrder')};
        if (!total|| isNaN(Number(total))){throw CustomError.badRequest('Missing total')};
        if (!state){throw CustomError.badRequest('Missing state');}
        const proveedorEntity = ProveedorEntity.fromObject(proveedor);
        const items = OrderItem.map((object:{[key:string]:any}) => OrderItemEntity.fromObject(object));
        const fecha = formatDate(deliveredAt);
        return new OrderEntityDtos(id, total, itemsInOrder, state, proveedorEntity, items, fecha);
    }
}