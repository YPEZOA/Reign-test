import { Pipe, PipeTransform } from '@angular/core';
import { INew } from '../interface/new.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(news: INew[ ], page: number = 0): INew[] {
    return news.slice(page, 20);
  }

}
