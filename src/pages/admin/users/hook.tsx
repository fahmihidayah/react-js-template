import { getUsers } from "@/data/apis/users";
import { UiState } from "@/data/constants";
import { BaseResponse, PaginateResponse } from "@/data/dto";
import { User, UserData } from "@/data/dto/user";
import { BaseDataHook, BaseHook } from "@/hook";
import { OnChangeEvent, SearchQuery, initialSearchQuery } from "@/hook/utils";
import { RootState } from "@/store";
import { useAppSelector } from "@/store/hooks";
import { ViewState, uiActions } from "@/store/ui-slice";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";


export interface AdminListUserHook extends BaseDataHook<PaginateResponse<Array<UserData>> | undefined> {
    onChangeEvent : OnChangeEvent;
    searchQuery : SearchQuery;
}


export const useAdminListUser = () : AdminListUserHook => {
    const viewState = useAppSelector((state : RootState) => state.ui)

    const dispatch = useDispatch();

    const [search, setSearch] = useSearchParams();

    const page = search.get('page') ?? "1"

    const [searchQuery, setSearchQuery] = useState({... initialSearchQuery})


    const onChangeEvent = (event : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.currentTarget;
        setSearchQuery({... searchQuery, [name] : value})
    }

    const [listUser, setListUser] = useState<PaginateResponse<Array<UserData>>>();

    const loadUserData = async (searchQuery : SearchQuery, page : string) => {
        dispatch(uiActions.setProgress());
        const response = await getUsers(searchQuery, page);
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
        loadUserData(searchQuery, page); 
    },
    [searchQuery, page])

    return {
        viewState : viewState, 
        onChangeEvent : onChangeEvent, 
        data : listUser,
        searchQuery : searchQuery
    };
}