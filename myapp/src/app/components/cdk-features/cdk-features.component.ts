import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdk-features',
  templateUrl: './cdk-features.component.html',
  styleUrls: ['./cdk-features.component.scss']
})
export class CDKFeaturesComponent implements OnInit {

  todoBanner = 'https://codebots.com/generated/_blog/crud/What_are_SQL_CRUD_operations/What_Are_SQL_CRUD_Operations_Banner-1400-477ae171d.webp';

  settingsBanner = 'https://codebots.com/generated/_blog/crud/how-can-you-implement-crud-using-openapi/How_Can_You_Implement_CRUD_Using_An_OpenAPI_Banner-1400-c1e9a8781.webp';

  constructor() { }

  ngOnInit(): void {
  }

}
