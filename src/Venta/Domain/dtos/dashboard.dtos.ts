import { CustomError } from "../../../Server";


export class DashboardDtos {

    constructor(
        public fecha:string,
        public total:number,
    ){}
    
    static fromObject= (object:{[key:string]:any} ):DashboardDtos => {
        const { year, month, day, total } = object;
        if (!total){throw CustomError.badRequest('Missing total')};
        if (!year){throw CustomError.badRequest('Missing año')};
        if (!month){throw CustomError.badRequest('Missing mes')};


        return new DashboardDtos(`${month}-${year}${!day ? '' : `-${day}`}`, Number(total));
    }
}