import { clearUserWithToken, setUserWithToken } from "@/data/locals";
import { ActionFunction, redirect } from "react-router-dom";

export const logoutLoader : ActionFunction = () => {
    clearUserWithToken();
    return redirect("/")
}