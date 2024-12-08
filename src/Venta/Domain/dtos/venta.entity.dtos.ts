import { PaymentMethod } from "@prisma/client";
import { ClientEntity } from "../../../Client";
import { ProveedorEntity } from "../../../Proveedor";
import { CustomError } from "../../../Server";
import { VentaItemEntity } from "../../../VentaItem/Domain";
import { formatDate } from '../../../config/regularexp';

export class VentaEntityDtos {

    constructor(
        public id:number,
        public total:string,
        public subTotal:number,
        public itemsInVenta:number,
        public tax:number,
        public client:ClientEntity,
        public createdAt:String,
        public type:DocumentType,
        public type_payment:PaymentMethod,
        public items:VentaItemEntity[],


        
    ){}
    
    static fromObject= (object:{[key:string]:any} ):VentaEntityDtos => {
        const {id, total, subTotal, itemsInVenta, tax, client, createdAt, type, type_payment, ventaItem} = object;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!itemsInVenta|| isNaN(Number(itemsInVenta))){throw CustomError.badRequest('Missing itemsInVenta')};
        if (!total|| isNaN(Number(total))){throw CustomError.badRequest('Missing total')};
        if (!subTotal|| isNaN(Number(subTotal))){throw CustomError.badRequest('Missing subTotal')};
        if (!tax|| isNaN(Number(tax))){throw CustomError.badRequest('Missing tax')};
        
        const clientEntity = ClientEntity.fromObject(client);
        const items = ventaItem.map((object:{[key:string]:any}) => VentaItemEntity.fromObject(object));
        const fecha = formatDate(createdAt);
        return new VentaEntityDtos(id, total, subTotal, itemsInVenta, tax, clientEntity, fecha,  type, type_payment, items);
    }
}