import { ViewState } from "@/store/ui-slice";

export interface BaseHook {
    viewState : ViewState;
}

export interface BaseDataHook<T> extends BaseHook {
    data : T
}