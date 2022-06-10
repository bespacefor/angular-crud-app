import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from '../blog/blog.component';

@Component({
  selector: 'app-add-panel',
  templateUrl: './add-panel.component.html',
  styleUrls: ['./add-panel.component.scss']
})
export class AddPanelComponent implements OnInit {

  @Output() onAdd: EventEmitter<Card> = new EventEmitter<Card>()

  title = ''
  text = ''

  constructor() { }

  ngOnInit(): void {
  }

  addCard() {
    if (this.title.trim() && this.text.trim()) {
      const card: Card = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(card)
     // console.log('New card is added: ', card)

      this.title = this.text = ''
    }
  }

}
