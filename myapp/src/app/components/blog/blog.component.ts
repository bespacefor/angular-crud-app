import { Component, OnInit } from '@angular/core';

export interface Card {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  search = ''
  // searchField = 'title'

  cards: Card[] = [
    { title: 'Introduction to the Angular Docs', text: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', id: 1 },
    { title: 'What is Angular?', text: 'This topic can help you understand Angular: what Angular is, what advantages it provides, and what you might expect as you start to build your applications. Angular is a development platform, built on TypeScript.', id: 2 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  updateCards(card: Card) {
    this.cards.unshift(card)
    //console.log('Card', card)
  }

  removeCard(id: number) {
    console.log('Id to remove', id);
    this.cards = this.cards.filter(c => c.id !== id)
  }

}
