import { api } from "."
import { BaseResponse } from "../dto"
import { User, UserData } from "../dto/user"
import { handleError } from "./auth"

export const getUsers = async () : Promise<BaseResponse<Array<UserData>>> => {
    try {
        const response = await api.get("users")

        const jsonResponse = await response.data
        
        return jsonResponse as BaseResponse<Array<UserData>>
    }
    catch(error){
        return await handleError(error)
    }
}