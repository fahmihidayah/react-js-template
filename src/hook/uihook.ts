import { UiState } from "@/data/constants";
import { AppDispatch, RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { ViewState, uiActions } from "@/store/ui-slice";
import { useEffect } from "react";

export const useResetUi = () : [ViewState] => {
    const viewState: ViewState = useAppSelector((state: RootState) => state.ui)

    const dispatch: AppDispatch = useAppDispatch();
    useEffect(() => {
        const identifier = setTimeout(() => {
            if (viewState.uiState !== UiState.init) {
                dispatch(uiActions.setInit())
            }
        }, 2000)
        return () => {
            clearTimeout(identifier);
        }
    }, [viewState])

    return [viewState]
}