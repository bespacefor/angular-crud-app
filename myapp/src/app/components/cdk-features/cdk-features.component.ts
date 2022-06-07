import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cdk-features',
  templateUrl: './cdk-features.component.html',
  styleUrls: ['./cdk-features.component.scss']
})
export class CDKFeaturesComponent implements OnInit {
  
  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}
