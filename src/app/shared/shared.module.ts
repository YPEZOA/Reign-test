import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {ButtonsFilterNewsComponent} from './buttons-filter-news/buttons-filter-news.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    ButtonsFilterNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent, ButtonsFilterNewsComponent]
})
export class SharedModule {}
