import { UiState } from "@/data/constants";
import { BaseHook } from "@/hook";
import { useResetUi } from "@/hook/uihook";
import { AppDispatch, RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ViewState, uiActions } from "@/store/ui-slice";
import { useEffect } from "react";

export interface HomeHook extends BaseHook {

}

export const useHome = () : HomeHook => {
    const viewState : ViewState = useAppSelector((state: RootState) => state.ui) 
    
    const dispatch : AppDispatch = useAppDispatch();

    useResetUi();

    return {viewState};
}