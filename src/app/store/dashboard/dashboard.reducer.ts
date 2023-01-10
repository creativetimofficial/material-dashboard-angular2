import { createReducer, on } from "@ngrx/store";
import { updateTitle } from "./dashboard.actions";
import { DashboardStateInterface } from "../../types/dashboardState.interface";

export interface DashboardState {
    title: string
}

export const initialState: DashboardState = {
    title: 'Dashboard'
}

export const dashboardReducer = createReducer(
    initialState,
    on(updateTitle, (state, {title}) => ({...state, title: title}))
)