import { Action, createReducer, on } from "@ngrx/store";
import { INew } from "src/app/interface/new.interface";
import * as actions from '../actions/searchNews.actions';

export interface Technology {
  text: string;
  news: INew[];
  loading: boolean;
  loaded: boolean;
  likeNew: any[];
  like: boolean;
}

export const initialState: Technology = {
  text: '',
  news: [],
  loading: false,
  loaded: false,
  likeNew: [],
  like: false,
}


const _searchTechnologyReducer = createReducer(initialState,
  on(actions.searchTechnology, (state, { text }) => ({ ...state, text, loading: true })),
  on(actions.searchTechnologySuccess, (state, { news }) => ({
    ...state,
    loading: false,
    loaded: true,
    news
  })),
  on(actions.giveALike, (state, { liked }) => ({
    ...state,
    likeNew: [...state.likeNew, liked],
    like: true
  })),
  on(actions.giveALikeSuccess, (state, { liked }) => ({
    ...state,
    likenew: liked,
  })),
)

export function searchTechnologyReducer(state: any, action: Action) {
  return _searchTechnologyReducer(state, action);
}
