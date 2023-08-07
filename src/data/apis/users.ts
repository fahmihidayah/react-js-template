import { api } from "."
import { BaseResponse, PaginateResponse } from "../dto"
import { User, UserData } from "../dto/user"
import { handleError } from "./auth"

export const getUsers = async (page : string | null = "1") : Promise<BaseResponse<Array<UserData>>> => {
    try {
        const response = await api.get("users", {
            params : {page : page}
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
        const response = await api.get('users/' + id);

        const jsonResponse = await response.data;

        return jsonResponse as BaseResponse<UserData>
    }
    catch (error) {
        return await handleError(error);
    }
} 