import { LoginForm } from "@/data/dto/auth";
import { useResetUi } from "@/hook/uihook";
import { RootState } from "@/store"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { ViewState, uiActions } from "@/store/ui-slice";
import { unwrapResult } from "@reduxjs/toolkit";
import { postLogin } from "@/data/apis/auth";
import { useNavigate } from "react-router-dom";
import { BaseHook } from "@/hook";

export type LoginAction = (form : LoginForm) => void 

export interface LoginHook extends BaseHook {
    loginAction : LoginAction
}

export const useLogin = (): LoginHook => {
    const viewState = useAppSelector((state: RootState) => state.ui)
    const dispatch = useAppDispatch();

    useResetUi();

    const navigate = useNavigate();

    const loginAction = async (loginForm: LoginForm) => {
        dispatch(uiActions.setProgress());
        const response = await postLogin(loginForm);
        if(response.error) {
            dispatch(uiActions.setError({message : response.message}))
        }
        else {
            dispatch(uiActions.setSuccess({message : "Success Login"}))
            navigate("/admin");
        }

    }

    return {viewState, loginAction};
} 