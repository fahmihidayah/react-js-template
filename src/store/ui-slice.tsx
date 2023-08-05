import { UiState } from "@/data/constants";
import { Action, PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ViewState {
    uiState : UiState,
    message : string | null
}

export const initialViewState : ViewState = {
    uiState : UiState.init,
    message : null
}

export interface UiStatePayload {
    message : string | null
}

const uiSlice = createSlice({
    name : 'ui',
    initialState : initialViewState,
    reducers : {
        setProgress(state) {
            state.uiState = UiState.loading;
            state.message = null
        },
        setError(state, action : PayloadAction<UiStatePayload>) {
            state.uiState = UiState.error;
            state.message = action.payload.message
        },
        setSuccess(state, action : PayloadAction<UiStatePayload> ) {
            state.uiState = UiState.success;
            state.message = action.payload.message;
        },
        setInit(state) {
            state.uiState = UiState.init;
            state.message = null
        },
    }
});

export const uiActions = uiSlice.actions

const uiReducer = uiSlice.reducer

export default uiReducer