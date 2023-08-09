import axios, { Axios, AxiosHeaders } from "axios";
import { BASE_API_URL, getHeaders } from "./utils";
import { getUserWithToken } from "../locals";
import { User } from "../dto/user";

export function createAPI() : Axios {
    
    const api = axios.create({
        baseURL: BASE_API_URL,
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