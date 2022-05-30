import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }

  goToBlog() {
    this.router.navigate(['/blog'])
  }

  goToAboutPage() {
    this.router.navigate(['/about'])
  }

  goToCDKPage() {
    this.router.navigate(['/cdk'])
  }

  ngOnInit(): void {
  }

}
