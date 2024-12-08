import { ClientEntity } from "../../../Client";
import { CustomError } from "../../../Server";
import { formatDate } from '../../../config/regularexp';

export class VentaEntity {

    constructor(
        public id:number,
        public total:string,
        public subTotal:number,
        public itemsInVenta:number,
        public tax:number,
        public client:ClientEntity,
        public createdAt:String,

        
    ){}
    
    static fromObject= (object:{[key:string]:any} ):VentaEntity => {
        const {id, total, subTotal, itemsInVenta, tax, client, createdAt} = object;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!itemsInVenta|| isNaN(Number(itemsInVenta))){throw CustomError.badRequest('Missing base_priece')};
        if (!total|| isNaN(Number(total))){throw CustomError.badRequest('Missing base_priece')};
        const clientEntity = ClientEntity.fromObject(client);
        const fecha = formatDate(createdAt);
        return new VentaEntity(id, total, subTotal, itemsInVenta, tax, clientEntity, fecha);
    }
}