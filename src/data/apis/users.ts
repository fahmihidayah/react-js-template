import { SearchQuery } from "@/hook/utils"
import { api } from "."
import { BaseResponse, PaginateResponse } from "../dto"
import { User, UserData } from "../dto/user"
import { handleError } from "./auth"
import { getHeaders } from "./utils"

export const getUsers = async (searchQuery : SearchQuery, page : string) : Promise<BaseResponse<Array<UserData>>> => {
    console.log(searchQuery)
    try {
        const response = await api.get("users", {
            params : {... searchQuery, page : page},
            headers : getHeaders()
        })

        const jsonResponse = await response.data
        
        return jsonResponse as PaginateResponse<Array<UserData>>
    }
    catch(error){
        return await handleError(error)
    }
}

export const getUserDetail = async (id : string | undefined) : Promise<BaseResponse<UserData>> => {
    try {
        const response = await api.get('users/' + id, {
            headers : getHeaders()
        });

        const jsonResponse = await response.data;

        return jsonResponse as BaseResponse<UserData>
    }
    catch (error) {
        return await handleError(error);
    }
} 