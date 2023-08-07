import { getUserDetail } from "@/data/apis/users";
import { User, UserData } from "@/data/dto/user";
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { ViewState, uiActions } from "@/store/ui-slice";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useUserDetail = () : [ViewState, UserData | undefined] => {
    const dispatch = useAppDispatch();
    const viewState = useAppSelector(state => state.ui);
    const [user, setUser] = useState<UserData>();

    const {id } = useParams();

    const requestUserDetail = async (id : string | undefined) => {
        dispatch(uiActions.setProgress());

        const response = await getUserDetail(id);

        if(response.error) {
            dispatch(uiActions.setError({ message : response.message }))
        }
        else {
            dispatch(uiActions.setSuccess({ message : response.message}));
            const user = response.data
            setUser(user as UserData)
        }
    }

    useEffect(() => {
        requestUserDetail(id);
    }, [])
    
    return [viewState, user]
}