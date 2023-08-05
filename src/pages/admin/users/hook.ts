import { getUsers } from "@/data/apis/users";
import { UiState } from "@/data/constants";
import { BaseResponse } from "@/data/dto";
import { User, UserData } from "@/data/dto/user";
import { RootState } from "@/store";
import { useAppSelector } from "@/store/hooks";
import { ViewState, uiActions } from "@/store/ui-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export type LoadListUserAction = () => void

export const useAdminListUser = () : [ViewState, Array<UserData>] => {
    const viewState = useAppSelector((state : RootState) => state.ui)
    const dispatch = useDispatch();

    const [listUser, setListUser] = useState<Array<UserData>>([]);

    const loadUserData = async () => {
        dispatch(uiActions.setProgress());
        const response = await getUsers();
        if(response.error) {
            dispatch(uiActions.setError({message : response.message}))
        }
        else {
            if(response.data) {
                dispatch(uiActions.setSuccess({message : response.message}))
                setListUser(response.data);
            }
            else {
                dispatch(uiActions.setError({message : "Users not found"}))
                
            }
        }
    }

    useEffect(() => {
        loadUserData();
    },
    [])

    return [viewState, listUser];
}