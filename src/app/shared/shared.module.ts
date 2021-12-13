import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {ButtonsFilterNewsComponent} from './buttons-filter-news/buttons-filter-news.component';
import {RouterModule} from '@angular/router';
import {NgSelectModule} from '@ng-select/ng-select';



@NgModule({
  declarations: [
    NavbarComponent,
    ButtonsFilterNewsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgSelectModule
  ],
  exports: [NavbarComponent, ButtonsFilterNewsComponent, NgSelectModule]
})
export class SharedModule {}
