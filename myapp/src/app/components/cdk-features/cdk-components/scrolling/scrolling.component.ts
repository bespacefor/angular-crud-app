import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollingComponent implements OnInit {

  items = Array.from({ length: 100000 }).map((_, i) => `Generated item #${i}`);

  // numbers = [];

  // constructor() {
  //   for (let i = 0; i < 1000; i++) {
  //     this.numbers.push(i);
  //   }
  // }

  ngOnInit(): void {
  }

}
