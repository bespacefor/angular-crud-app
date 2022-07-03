import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nameSurname', 'title', 'status', 'salary', 'comment', 'actions'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllInfo();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width: '45%'
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
        this.getAllInfo();
      }
    });
  }

  getAllInfo() {
    this.api.getInfo()
      .subscribe({
        next: (res) => {
          //console.log(res);
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.error('Error while fetching the records');
        }
      })
  }

  editInfo(row: any) {
    this.dialog.open(DialogComponent, {
      width: '45%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllInfo();
      }
    });
  }

  deleteInfo(id: number) {
    this.api.deleteInfo(id)
      .subscribe({
        next: (res) => {
          console.log('Employee info deleted successfully');
          this.getAllInfo();
        },
        error: (err) => {
          console.error('Error while deleting the record');
        }
      })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
