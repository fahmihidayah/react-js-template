import { getUsers } from "@/data/apis/users";
import { UiState } from "@/data/constants";
import { BaseResponse, PaginateResponse } from "@/data/dto";
import { User, UserData } from "@/data/dto/user";
import { RootState } from "@/store";
import { useAppSelector } from "@/store/hooks";
import { ViewState, uiActions } from "@/store/ui-slice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

export type LoadListUserAction = () => void

export const useAdminListUser = () : [ViewState, PaginateResponse<Array<UserData>> | undefined] => {
    const viewState = useAppSelector((state : RootState) => state.ui)

    const dispatch = useDispatch();

    const [search, setSearch] = useSearchParams();
    const page = search.get('page')

    const [listUser, setListUser] = useState<PaginateResponse<Array<UserData>>>();

    const loadUserData = async (page : string | null) => {
        dispatch(uiActions.setProgress());
        const response = await getUsers(page);
        if(response.error) {
            dispatch(uiActions.setError({message : response.message}))
        }
        else {
            if(response.data) {
                dispatch(uiActions.setSuccess({message : response.message}))
                setListUser(response as PaginateResponse<Array<UserData>>);
            }
            else {
                dispatch(uiActions.setError({message : "Users not found"}))
                
            }
        }
    }

    useEffect(() => {
        loadUserData(page);
    },
    [page])

    return [viewState, listUser];
}