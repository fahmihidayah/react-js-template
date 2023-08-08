import axios, { Axios, AxiosHeaders } from "axios";
import { BASE_API_URL } from "./utils";
import { getUserWithToken } from "../locals";
import { User } from "../dto/user";

function createAPI() : Axios {
    const userWithToken : User | null = getUserWithToken()
    const headers : AxiosHeaders = new AxiosHeaders({
        "Content-Type" : "Application/Json"
    })
    
    if(userWithToken) {
        headers.set("Authorization", `Bearer ${userWithToken.access_token}`)
    }
    
    
    const api = axios.create({
        baseURL: BASE_API_URL,
        headers: headers
    })

    api.interceptors.request.use(request => {
        console.log('Starting Request', JSON.stringify(request, null, 2))
        return request
    })
    api.interceptors.response.use(response => {
        console.log('Response:', JSON.stringify(response, null, 2))
        return response
    })
    return api
}



export const api : Axios = createAPI()