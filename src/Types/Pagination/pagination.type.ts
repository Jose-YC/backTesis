export interface PaginateResponse<T> {
    total?: number,
    data: T[],
}

export interface UseCase<T, type> {
    execute(dtos:type):Promise<T>
}

export interface UseCaseDetails<T, type, typesecond> {
    execute(id:type, idsecond:typesecond):Promise<T>
}


export interface UseCasePaginate<T, type> {
    execute(dtos:type):Promise<PaginateResponse<T>>
}