import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../components/blog/blog.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cards: Card[], search: string = ''): Card[] {
    if (!search.trim()) {
      return cards
    }

    return cards.filter(card => {
      return card.title.toLowerCase().includes(search.toLowerCase())
    })
  }

  // transform(cards: Card[], search: string = '', field: string = 'title'): Card[] {
  //   if (!search.trim()) {
  //     return cards
  //   }

  //   return cards.filter(card => {
  //     return card[field].toLowerCase().includes(search.toLowerCase())
  //   })
  // }

}
