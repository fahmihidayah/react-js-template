import { AxiosHeaders } from "axios";
import { User } from "../dto/user";
import { getUserWithToken } from "../locals";

export const BASE_URL = "http://localhost:3001/"
export const BASE_API_URL = `${BASE_URL}api/v1/`;

export function getUrl(path : string) {
    return `${BASE_API_URL}${path}`;
}


export function getHeaders() : AxiosHeaders{

    const userWithToken : User | null = getUserWithToken()
    const headers : AxiosHeaders = new AxiosHeaders({
        "Content-Type" : "Application/Json"
    })
    
    if(userWithToken) {
        headers.set("Authorization", `Bearer ${userWithToken.access_token}`)
    }
    
    return headers
}