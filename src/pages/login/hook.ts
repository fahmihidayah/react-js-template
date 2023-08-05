import { LoginForm } from "@/data/dto/auth";
import { useResetUi } from "@/hook/uihook";
import { RootState } from "@/store"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { ViewState, uiActions } from "@/store/ui-slice";
import { unwrapResult } from "@reduxjs/toolkit";
import { postLogin } from "@/data/apis/auth";
import { useNavigate } from "react-router-dom";

export type LoginAction = (form : LoginForm) => void 

export const useLogin = (): [ViewState, LoginAction] => {
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

    return [viewState, loginAction];
} 