import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { DashboardState } from "./dashboard.reducer";

export const selectTitle = (state: AppState) => state.dashboard.title;
