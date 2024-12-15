
export class CreateMeasuresDtos {

    private constructor(
        public readonly name:string,
        public readonly abbrev:string,
    ){}

    static create(props: {[key:string]:any}): [string?, CreateMeasuresDtos?]{
        const { name, abbrev } = props;
        if (!name) return ['Nombre vacio'];
        if (!abbrev) return ['Abreviacion vacia'];
        return [undefined, new CreateMeasuresDtos( name, abbrev )] 
    }
}