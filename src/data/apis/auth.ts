import axios, { AxiosResponse } from "axios";
import { BaseResponse } from "../dto";
import { LoginForm, SignUpForm } from "../dto/auth"
import { getUrl } from "./utils"
import { api } from ".";
import { setUserWithToken } from "../locals";
import { User } from "../dto/user";

export const handleError = async (error : any) : Promise<BaseResponse<any>> => {
    if(typeof error === "string") {
        return {
            error : true,
            message : error,
            data : null
        }
    }
    else if (error instanceof Error) {
        return {
            error : true,
            message : error.message,
            data : null
        }
    }
    else {
        return {
            error : true,
            message : "Error Unknown",
            data : null
        }
    }
}

export const postLogin = async (form : LoginForm) : Promise<BaseResponse<any>> =>{
    try {
        const response : AxiosResponse = await api.post(getUrl("users/login"), form);

        const jsonResponse = await response.data as BaseResponse<User>

        if(jsonResponse.data) {
            setUserWithToken(jsonResponse.data)
        }
       
        return jsonResponse
    }
    catch(error) {
        return await handleError(error)
    }
}

export const postSignUp = async (form : SignUpForm) : Promise<BaseResponse<any>> => {
    try {
        const response = await api.post("users/register", {
            email : form.email,
            first_name : form.firstName,
            last_name : form.lastName,
            password : form.password
        })

        const jsonResponse = await response.data
        
        return jsonResponse
    }
    catch(error){
        return await handleError(error)
    }
}