import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './components/about/about.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddPanelComponent } from './components/add-panel/add-panel.component';
import { CDKFeaturesComponent } from './components/cdk-features/cdk-features.component';
import { AboutMoreComponent } from './components/about-more/about-more.component';
import { BlogComponent } from './components/blog/blog.component';
import { MaterialModule } from './material/material.module';
import { EditPanelComponent } from './components/edit-panel/edit-panel.component';
import { ViewPanelComponent } from './components/view-panel/view-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    AboutComponent,
    PageNotFoundComponent,
    AddPanelComponent,
    CDKFeaturesComponent,
    AboutMoreComponent,
    BlogComponent,
    EditPanelComponent,
    ViewPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
