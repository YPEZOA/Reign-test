import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap, catchError, tap} from 'rxjs/operators';
import {of} from 'rxjs'
import {NewsService} from 'src/app/services/news.service';
import * as searchActions from '../actions/searchNews.actions';


@Injectable()
export class SearchNewsEffects {

  constructor(private actions$: Actions, private newsService: NewsService) {}

  searchNews$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(searchActions.searchTechnology),
      mergeMap((action) => {
        return this.newsService.getNews(action.text).pipe(
          map(news => searchActions.searchTechnologySuccess({news: news})),
          catchError(err => of(console.log('error'), err)),
        )
      })
    )
  })

}
