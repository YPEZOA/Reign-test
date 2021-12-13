import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {INew} from '../interface/new.interface';
import {NewsService} from '../services/news.service';
import {searchTechnology} from '../store/actions/languages.actions';
import {AppState} from '../store/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectLanguage: FormControl;
  news: INew[] = [];
  languages = [
    {image: '../../assets/images/angular.png', name: 'Angular', language: 'angularjs'},
    {image: '../../assets/images/react.png', name: 'Reactjs', language: 'reactjs'},
    {image: '../../assets/images/vue.png', name: 'Vuejs', language: 'vuejs'}
  ]


  constructor(private newsService: NewsService, private store: Store<AppState>) {
    this.selectLanguage = new FormControl({
      selector: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.store.select('searchTechnology').subscribe(resp => console.log(resp))
  }

  getTypeNews(type: any) {
    this.store.dispatch(searchTechnology(type.language))
    this.newsService.getNews(type.language).subscribe(resp => {
      this.news = resp;
    });
  }

}
