import { createAction, props } from "@ngrx/store";
import { INew } from "src/app/interface/new.interface";

export const searchTechnology = createAction(
  '[Search] Search technology', props<{ text: string }>()
)

export const searchTechnologySuccess = createAction(
  '[Search] Search Technology Success', props<{ news: INew[] }>()
)

export const giveALike = createAction(
  '[Like] Give a like', props<{ liked: any }>()
)

export const giveALikeSuccess = createAction(
  '[Like] Give a like success', props<{ liked: any }>()
)