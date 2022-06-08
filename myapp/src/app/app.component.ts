import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'myapp';

  constructor(private router: Router) { }

  goToBlogPage() {
    this.router.navigate(['/blog'])
  }

  goToCreatePage() {
    this.router.navigate(['/create'])
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
