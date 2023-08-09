import { useAppDispatch, useAppSelector } from "@/store/hooks"

import { BaseDataHook, BaseHook } from "@/hook";
import { Role } from "@/data/dto/role";
import { ChangeEvent, useEffect, useState } from "react";
import { BaseResponse } from "@/data/dto";
import { uiActions } from "@/store/ui-slice";
import { getRoles } from "@/data/apis/roles";
import { useSearchParams } from "react-router-dom";
import { OnChangeEvent, SearchQuery, initialSearchQuery } from "@/hook/utils";
import { useResetUi } from "@/hook/uihook";

export interface AdminListRoleHook extends BaseDataHook<BaseResponse<Array<Role>>> {
    onChangeEvent : OnChangeEvent;
    searchQuery : SearchQuery;
}

export const useAdminListRole = () : AdminListRoleHook => {
    const dispatch = useAppDispatch();
    const viewState = useAppSelector(state => state.ui)

    const [search, setSearch] = useSearchParams();

    const page = search.get('page') ?? "1"

    const [searchQuery, setSearchQuery] = useState({... initialSearchQuery})

    const onChangeEvent = (event : ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.currentTarget;
        setSearchQuery({... searchQuery, [name] : value})
    }

    const [listRoles, setListRoles] = useState<BaseResponse<Array<Role>>>({
        data : [],
        error : false,
        message : ""
    });


    const requestRoles = async () => {
        dispatch(uiActions.setProgress())
        const response = await getRoles();
        if(response.error) {
            dispatch(uiActions.setError({message : response.message}));
        }
        else {
            dispatch(uiActions.setSuccess({message : response.message}))
            setListRoles(response)
        }
    }

    useEffect(()=> {
        requestRoles();
    }, [searchQuery, page])

    return {viewState : viewState, data : listRoles, onChangeEvent, searchQuery}
}