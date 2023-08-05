import { Action, ThunkAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import uiReducer from "./ui-slice";

const rootReducer = combineReducers({
    ui : uiReducer
})

const store = configureStore({
    reducer : rootReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware(),
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>


// default AppThunk
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store;