import { getRoles, postRole } from "@/data/apis/roles";
import { UiState } from "@/data/constants";
import { BaseResponse } from "@/data/dto";
import { Role, RoleForm } from "@/data/dto/role";
import { BaseDataHook } from "@/hook";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { uiActions } from "@/store/ui-slice";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export type CreateRole = (roleForm : RoleForm) => void

export interface AdminRoleFormHook extends BaseDataHook<BaseResponse<Role>> {
    createRole : CreateRole
}

export const useAdminRoleForm = () : AdminRoleFormHook => {
    const dispatch = useAppDispatch();
    const viewState = useAppSelector(state => state.ui)

    const navigate = useNavigate();


    const [role, setRole] = useState<BaseResponse<Role>>({
        data : null,
        error : false,
        message : ""
    });


    const createRole = async (roleForm : RoleForm) => {
        dispatch(uiActions.setProgress())
        const response = await postRole(roleForm);
        if(response.error) {
            dispatch(uiActions.setError({message : response.message}));
        }
        else {
            dispatch(uiActions.setSuccess({message : response.message}))
            setRole(response)
        }
    }


    useEffect(()=>{
        if(role.data !== null) {
            navigate("/admin/roles");
        }
    }, [role])

    return {viewState : viewState, data : role, createRole}
}