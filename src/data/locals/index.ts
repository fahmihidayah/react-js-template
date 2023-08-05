import { User } from "../dto/user";

export const clearUserWithToken = () => {
    localStorage.setItem("user-with-token", "")
}

export const isTokenAvailable = () : Boolean => {
    return localStorage.getItem("user-with-token") !== ""
}

export const setUserWithToken = (userWithToken : User) => {
    localStorage.setItem("user-with-token", JSON.stringify(userWithToken));
}

export const getUserWithToken = () : User | null => {
    const jsonUserWithToken : string | null = localStorage.getItem("user-with-token")
    if(jsonUserWithToken) {
        return JSON.parse(jsonUserWithToken);
    }
    else {
        return null;
    }
}