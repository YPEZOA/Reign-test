import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs'
import { NewsService } from 'src/app/services/news.service';
import * as searchActions from '../actions/searchNews.actions';

@Injectable()
export class SearchNewsEffects {

  constructor(private actions$: Actions, private newsService: NewsService) { }

  searchNews$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchActions.searchTechnology),
      mergeMap((action) => this.newsService.getNews(action.text).pipe(
        map(news => searchActions.searchTechnologySuccess({ news: news })),
        catchError(err => of(console.log('error'), err)),
      ))
    )
  });

  giveALikeNew$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchActions.giveALike),
      // El merge siempre debe retornar un observable
      mergeMap(action => of(action.liked).pipe(
        map(newSelected => searchActions.giveALikeSuccess({ liked: newSelected })),
        catchError(err => of(console.log('error'), err)),
      )),
    )
  });

}