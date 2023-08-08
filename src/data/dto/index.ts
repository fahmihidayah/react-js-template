export interface BaseResponse<T> {
    error : boolean;
    message : string;
    data : T | null
}

export interface PaginateResponse<T> extends BaseResponse<T> {
    page : number;
    total : number;
}

export interface BaseQuery {
    page : string;
    keyword : string;
}