import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Card } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges, OnInit, OnDestroy {

  @Input() card!: Card;
  @Output() onRemove = new EventEmitter<number>()

  removeCard() {
    this.onRemove.emit(this.card.id)
  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.card.title);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
