import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss']
})
export class TextFieldComponent implements OnInit {

  firstNameAutofilled!: boolean;
  lastNameAutofilled!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
