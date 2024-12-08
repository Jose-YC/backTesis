import { CustomError } from "../../../Server";


export class DashboardDetailsDtos {

    constructor(
        public name:string,
        public total:number,
    ){}
    
    static fromObject= (object:{[key:string]:any} ):DashboardDetailsDtos => {
        const { name, total, medida } = object;

        if (!total){throw CustomError.badRequest('Missing total')};
        if (!name){throw CustomError.badRequest('Missing año')};

        return new DashboardDetailsDtos(`${name}${!medida ? '' : ` ${medida}`}`, Number(total));
    }
}