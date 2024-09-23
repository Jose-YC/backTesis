
export class CreateRolDtos {

    private constructor(
        public readonly name:string,
    ){}

    static create(props: {[key:string]:any}): [string?, CreateRolDtos?]{
        const { name } = props;
        if (!name) return ['Missing name'];
        return [undefined, new CreateRolDtos(name)]
    }
}