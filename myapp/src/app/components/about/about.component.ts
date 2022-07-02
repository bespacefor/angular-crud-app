import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  crudBanner = 'https://codebots.com/crud/CRUD_Operations_Banner.png';
  
  aboutBanner = 'https://codebots.com/generated/_blog/crud/how-do-you-implement-crud-using-graphql/DT-675_codebots-blog-lrg-1400-b164504e0.webp';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
