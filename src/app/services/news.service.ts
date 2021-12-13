import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getNews(language: string): Observable<any> {
    return this.http.get(`${environment.base_api}${language}&page=0`).pipe(
      map((response: any) => response['hits'])
    )
  }
}
