import {createAction, props} from "@ngrx/store";


export const searchTechnology = createAction(
  'Search technology', props<{ text: string}>()
)
