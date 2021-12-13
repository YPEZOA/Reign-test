import {Action, createReducer, on} from "@ngrx/store";
import * as actions from '../actions/languages.actions';

export interface Technology {
    text: string;
}

export const initialState: Technology = {
    text: 'angularjs'
}

const _searchTechnologyReducer = createReducer(initialState,
    on(actions.searchTechnology, (state,  { text }) => ({ text })),
)

export function searchTechnologyReducer(state: any, action: Action) {
    return _searchTechnologyReducer(state, action);
}
