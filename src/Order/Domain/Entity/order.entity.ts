import { OrderState } from "../../../Enum/enum";
import { ProveedorEntity } from "../../../Proveedor";
import { CustomError } from "../../../Server";
import { formatDate } from '../../../config/regularexp';

export class OrderEntity {

    constructor(
        public id:number,
        public total:string,
        public itemsInOrder:string,
        public state:OrderState,
        public proveedor:ProveedorEntity,
        public deliveredAt?:String,

        
    ){}
    
    static fromObject= (object:{[key:string]:any} ):OrderEntity => {
        const {id, total, itemsInOrder, state, proveedor, deliveredAt} = object;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!itemsInOrder|| isNaN(Number(itemsInOrder))){throw CustomError.badRequest('Missing base_priece')};
        if (!total|| isNaN(Number(total))){throw CustomError.badRequest('Missing base_priece')};
        if (!state){throw CustomError.badRequest('Missing name');}
        const proveedorEntity = ProveedorEntity.fromObject(proveedor);
        const fecha = formatDate(deliveredAt);
        return new OrderEntity(id, total, itemsInOrder, state, proveedorEntity, fecha);
    }
}