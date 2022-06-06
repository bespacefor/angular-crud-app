import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/interface';

@Component({
  selector: 'app-add-panel',
  templateUrl: './add-panel.component.html',
  styleUrls: ['./add-panel.component.scss']
})
export class AddPanelComponent implements OnInit {

  form!: FormGroup;

  constructor() { }

  // ngOnInit(): void {
  // }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required)
    })
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    const article: Article = {
      title: this.form.value.title,
      author: this.form.value.author,
      text: this.form.value.text,
      date: new Date()
    }

    console.log(article)
  }

}
