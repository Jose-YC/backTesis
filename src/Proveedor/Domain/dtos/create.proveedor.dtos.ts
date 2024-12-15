import { regularExps } from "../../../config";
import { CustomError } from "../../../Server";

export class CreateProveedorDtos {

    private constructor(
        public readonly repre:string,
        public readonly ruc:string,
        public readonly email:string,
        public readonly phone:string,
        public readonly address:string, 
    ){}

    static create(props: {[key:string]:any}): [string?, CreateProveedorDtos?]{
        const {repre, ruc, email, phone, address} = props;
        if (!email) return ['Email vacio'];
        if (!repre) return ['Nombre del representante vacio'];
        if (!ruc) return ['Ruc vacio'];
        if (!address) return ['Direccion vacia'];
        if (!phone) return ['Celular vacio'];
        return [undefined, new CreateProveedorDtos(repre, ruc, email, phone, address,)] 
    }
}