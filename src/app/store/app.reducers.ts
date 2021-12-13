import {ActionReducerMap} from "@ngrx/store";
import * as reducers from "./reducers";

export interface AppState {
  searchTechnology: reducers.Technology
}

export const appReducers: ActionReducerMap<AppState> = {
  searchTechnology: reducers.searchTechnologyReducer
}
