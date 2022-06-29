import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  form!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form);
      const formData = {...this.form.value};
      console.log(formData);
    }
  }

}
