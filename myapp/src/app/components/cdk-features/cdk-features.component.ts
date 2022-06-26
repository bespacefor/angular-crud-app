import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-features',
  templateUrl: './cdk-features.component.html',
  styleUrls: ['./cdk-features.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CDKFeaturesComponent implements OnInit {
  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  constructor() { }

  ngOnInit(): void {
  }

}
