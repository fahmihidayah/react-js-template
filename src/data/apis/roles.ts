import { api } from "."
import { BaseResponse } from "../dto"
import { Role, RoleForm } from "../dto/role"
import { handleError } from "./auth"
import { getHeaders } from "./utils"

export const getRoles = async () : Promise<BaseResponse<Array<Role>>> => {
    try {
        const response = await api.get("roles", {
        },)

        const jsonResponse = await response.data
        
        return jsonResponse as BaseResponse<Array<Role>>
    }
    catch(error){
        return await handleError(error)
    }
}

export const postRole = async (roleForm : RoleForm) : Promise<BaseResponse<Role>> => {
    try {
        const response = await api.post("roles", roleForm)

        const jsonResponse = await response.data;

        return jsonResponse as BaseResponse<Role>
    }
    catch(error) {
        return await handleError(error)
    }
}