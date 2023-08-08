import { ChangeEvent } from "react"

export type OnChangeEvent = (event : ChangeEvent<HTMLInputElement>) => void

export interface SearchQuery {
    keyword : string
}

export const initialSearchQuery : SearchQuery = {
    keyword : "",
}