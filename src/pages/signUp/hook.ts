import { SignUpForm } from "@/data/dto/auth";
import { AppDispatch, RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ViewState, uiActions } from "@/store/ui-slice";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import { useResetUi } from "@/hook/uihook";
import { postSignUp } from "@/data/apis/auth";

export type SignUpAction = (signUpForm : SignUpForm) => void;

export const useSignUp = () : [ViewState, SignUpAction] => {

    const viewState : ViewState = useAppSelector((state: RootState) => state.ui) 

    const dispatch : AppDispatch = useAppDispatch();

    useResetUi()

    const navigate = useNavigate()

    const signUpAction = async (signUpForm : SignUpForm) => {
        dispatch(uiActions.setProgress())
        const response = await postSignUp(signUpForm);
        if(response.error) {
            dispatch(uiActions.setError({message : response.message}))
        }
        else {
            dispatch(uiActions.setSuccess({message : "Success registration"}))
            navigate("/")
        }
    }

    return [viewState, signUpAction];
}