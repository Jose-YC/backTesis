import { CustomError } from "../../../Server";

export class CreateOrderItemDtos {

    private constructor(
        public readonly id:number,
        public readonly quantity:number,
        public readonly price:number,
        public readonly product_id:number,
        public readonly measures_id:number,
    ){}

    static create(props: {[key:string]:any}): [string?, CreateOrderItemDtos?]{
        const { id, quantity, price, product_id, measures_id } = props;

        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing quantity')};
        if (!quantity|| isNaN(Number(quantity))){throw CustomError.badRequest('Missing quantity')};
        if (!price|| isNaN(Number(price))){throw CustomError.badRequest('Missing price')};
        if (!product_id|| isNaN(Number(product_id))){throw CustomError.badRequest('Missing id producto')};
        if (!measures_id|| isNaN(Number(measures_id))){throw CustomError.badRequest('Missing id measures')};
        
        return [undefined, new CreateOrderItemDtos( id, quantity, price, product_id, measures_id )] 
    }
}