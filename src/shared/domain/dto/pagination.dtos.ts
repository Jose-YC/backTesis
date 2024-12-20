export class PaginateDtos {

    private constructor(
        public readonly lim:number,
        public readonly page:number,
        public readonly id?:number,
        public readonly search?:string,
    ){}

    static create(page:number, lim:number, search?:string, id?:number,): [string?, PaginateDtos?]{
        if (isNaN(page) || isNaN(lim)) return ['Page and Limit must be numbers'];
        if (search && !search) return ['The search engine is empty'];
        if (lim && lim<0) return ['Limit is must be greater than 0'];
        if (page && page<0) return ['Page is must be greater than 0'];
        return [undefined, new PaginateDtos(lim, page, id, search)];
    }
}