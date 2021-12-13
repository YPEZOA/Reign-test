import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs';
import {INew} from '../interface/new.interface';
import {searchTechnology} from '../store/actions/searchNews.actions';
import {AppState} from '../store/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  selectLanguage: FormControl;
  searchSubscription: Subscription = new Subscription();
  emptyList!: boolean;
  loading: boolean = false;
  news: INew[] = [];

  languages = [
    {image: '../../assets/images/angular.png', name: 'Angular', language: 'angularjs'},
    {image: '../../assets/images/react.png', name: 'Reactjs', language: 'reactjs'},
    {image: '../../assets/images/vue.png', name: 'Vuejs', language: 'vuejs'}
  ]

  constructor(private store: Store<AppState>) {
    this.selectLanguage = new FormControl({
      selector: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.searchSubscription = this.store.select('searchTechnology').subscribe(resp => {
      localStorage.setItem('filters', JSON.stringify(resp));
      this.news = resp.news;
      this.loading = resp.loading;
    })
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  getTypeNews(type: any) {
    this.store.dispatch(searchTechnology({text: type.language}))
  }

}
