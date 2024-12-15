import { CustomError } from "../../../Server";

export class CreateVentaItemDtos {

    private constructor(
        public readonly id:number,
        public readonly quantity:number,
        public readonly price:number,
        public readonly income:number,
        public readonly product_id:number,
        public readonly measures_id:number,
    ){}

    static create(props: {[key:string]:any}): [string?, CreateVentaItemDtos?]{
        const { id, quantity, price, income, product_id, measures_id } = props;

        if (!id|| isNaN(Number(id))) return ['Codigo no valido'];
        if (!quantity|| isNaN(Number(quantity))) return ['Cantidad no valida'];
        if (!price|| isNaN(Number(price))) return ['Precio no valido'];
        if (!product_id|| isNaN(Number(product_id))) return ['Codigo del Producto no valido'];
        if (!measures_id|| isNaN(Number(measures_id)))return ['Codigo de la Medida no valida'];
        
        return [undefined, new CreateVentaItemDtos( id, quantity, price, income, product_id, measures_id )] 
    }
}