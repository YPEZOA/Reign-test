import { Component, OnInit } from '@angular/core';
import { INew } from '../interface/new.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favorites: INew[] = []; 
  constructor() {
    this.favorites = JSON.parse(localStorage.getItem('my-faves') || '');
   }

  ngOnInit(): void {
  }

}
