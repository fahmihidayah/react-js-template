import { UiState } from "@/data/constants"
import { ViewState } from "@/store/ui-slice"
import React from "react"

interface Props {
    viewState: ViewState
}

export const TopMessage: React.FC<Props> = ({ viewState }) => {
    return <>
        {viewState.uiState === UiState.error &&
            <div className="alert alert-danger" role="alert">
                {viewState.message}
            </div>}
        {viewState.uiState === UiState.success &&
            <div className="alert alert-primary" role="alert">
                {viewState.message}
            </div>}</>
}