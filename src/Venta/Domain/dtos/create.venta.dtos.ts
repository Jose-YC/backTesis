import { DocumentType, PaymentMethod } from "../../../Enum/enum";
import { CreateVentaItemDtos } from "../../../VentaItem/Domain";

export class CreateVentaDtos {

    private constructor(
        public readonly client_id:string,
        public readonly type:DocumentType,
        public readonly type_payment:PaymentMethod,
        public readonly itemsVenta:CreateVentaItemDtos[],

    ){}

    static create(props: {[key:string]:any}): [string?, CreateVentaDtos?]{
        const { client_id, type, type_payment, itemsVenta } = props;
        
        if (type === "BOLETA" || type === "FACTURA") {
            if (!client_id) return ['Missing client id'];
        }
        
        const itemsVentaEntity = itemsVenta.map((object:{[key:string]:any}) => {
            const [ error, itemsVentadtos ] = CreateVentaItemDtos.create(object)
            return itemsVentadtos;
        });
        return [undefined, new CreateVentaDtos(client_id, type, type_payment, itemsVentaEntity)] 
    }
}