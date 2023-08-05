import { UiState } from "@/data/constants";
import { useResetUi } from "@/hook/uihook";
import { AppDispatch, RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ViewState, uiActions } from "@/store/ui-slice";
import { useEffect } from "react";

export const useHome = () : [ViewState] => {
    const viewState : ViewState = useAppSelector((state: RootState) => state.ui) 
    
    const dispatch : AppDispatch = useAppDispatch();

    useResetUi();

    return [viewState];
}