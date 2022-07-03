import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  employeeForm!: FormGroup;

  actionsBtn: string = 'Create a profile';

  statusList: string[] = ['Open to work', 'Intern', 'Employed', 'On vacation'];

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>,
  ) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      nameSurname: ['', Validators.required],
      title: ['', Validators.required],
      status: ['', Validators.required],
      salary: ['', Validators.required],
      comment: ['', Validators.required]
    });

    //console.log(this.editData);

    if (this.editData) {
      this.actionsBtn = 'Save changes';

      this.employeeForm.controls['nameSurname'].setValue(this.editData.nameSurname);
      this.employeeForm.controls['title'].setValue(this.editData.title);
      this.employeeForm.controls['status'].setValue(this.editData.status);
      this.employeeForm.controls['salary'].setValue(this.editData.salary);
      this.employeeForm.controls['comment'].setValue(this.editData.comment);
    }
  }

  addInfo() {
    //console.log(this.employeeForm.value);

    if (!this.editData) {
      if (this.employeeForm.valid) {
        this.api.postInfo(this.employeeForm.value)
          .subscribe({
            next: (res) => {
              console.log('Employee info added successfully');
              this.employeeForm.reset();
              this.dialogRef.close('save');
            },
            error: () => {
              console.error('Error while adding data');
            }
          })
      }
    } else {
      this.updateInfo()
    }
  }

  updateInfo() {
    this.api.putInfo(this.employeeForm.value, this.editData.id)
    .subscribe({
      next:(res)=>{
        console.log('Employee info edited successfully');
        this.employeeForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        console.error('Error while updating the record');
      }
    })
  }

}
