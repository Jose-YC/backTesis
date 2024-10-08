export class PaginateDtos {

    private constructor(
        public readonly lim:number,
        public readonly page:number,
        public readonly search?:string,
        public readonly id?:number,
    ){}

    static create(page:number, lim:number, search?:string, id?:number): [string?, PaginateDtos?]{
        if (isNaN(page) || isNaN(lim)) return ['Page and Limit must be numbers'];
        if (id && isNaN(id)) return ['Invalid identifier'];
        if (search && !search) return ['The search engine is empty'];
        if (lim<0) return ['Limit is must be greater than 0'];
        if (page<0) return ['Page is must be greater than 0'];
        return [undefined, new PaginateDtos(lim, page, search, id)];
    }
}