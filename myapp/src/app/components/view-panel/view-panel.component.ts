import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-panel',
  templateUrl: './view-panel.component.html',
  styleUrls: ['./view-panel.component.scss']
})
export class ViewPanelComponent implements OnInit {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}
