import { CustomError } from "../../../Server";

export class CreateMeasuresDtos {

    private constructor(
        public readonly name:string,
        public readonly abbrev:string,
    ){}

    static create(props: {[key:string]:any}): [string?, CreateMeasuresDtos?]{
        const { name, abbrev } = props;
        if (!name){throw CustomError.badRequest('Missing name');};
        if (!abbrev){throw CustomError.badRequest('Missing abbreviation');};
        return [undefined, new CreateMeasuresDtos( name, abbrev )] 
    }
}