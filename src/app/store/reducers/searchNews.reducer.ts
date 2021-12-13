import {Action, createReducer, on} from "@ngrx/store";
import {INew} from "src/app/interface/new.interface";
import * as actions from '../actions/searchNews.actions';

export interface Technology {
  text: string;
  news: INew[];
  loading: boolean;
  loaded: boolean;
}

export const initialState: Technology = {
  text: '',
  news: [],
  loading: false,
  loaded: false,
}

const _searchTechnologyReducer = createReducer(initialState,
  on(actions.searchTechnology, (state, {text}) => ({...state, text, loading: true})),
  on(actions.searchTechnologySuccess, (state, {news}) => ({
    ...state,
    loading: false,
    news: [...news]
  })),
)

export function searchTechnologyReducer(state: any, action: Action) {
  return _searchTechnologyReducer(state, action);
}
