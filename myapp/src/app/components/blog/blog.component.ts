import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  search = ''

  cards: Card[] = [
    { title: 'Introduction to the Angular Docs', text: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.', id: 1 },
    { title: 'What is Angular?', text: 'This topic can help you understand Angular: what Angular is, what advantages it provides, and what you might expect as you start to build your applications. Angular is a development platform, built on TypeScript.', id: 2 },
    { title: 'Getting started with Angular', text: 'This tutorial introduces you to the essentials of Angular by walking you through building an e-commerce site with a catalog, shopping cart, and check-out form.', id: 3 },
    { title: 'Introduction to Angular concepts', text: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.', id: 4 },
    { title: 'Setting up the local environment and workspace', text: 'This guide explains how to set up your environment for Angular development using the Angular CLI tool. It includes information about prerequisites, installing the CLI, creating an initial workspace and starter app, and running that app locally to verify your setup.', id: 5 },
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
