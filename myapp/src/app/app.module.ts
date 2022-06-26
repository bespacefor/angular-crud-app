import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ClipboardModule } from '@angular/cdk/clipboard';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { CreateComponent } from './components/create/create.component';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './components/about/about.component';
import { AboutMoreComponent } from './components/about-more/about-more.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CDKFeaturesComponent } from './components/cdk-features/cdk-features.component';
import { AddPanelComponent } from './components/add-panel/add-panel.component';

import { EditPanelComponent } from './components/edit-panel/edit-panel.component';
import { ViewPanelComponent } from './components/view-panel/view-panel.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MaterialTableComponent } from './components/material-table/material-table.component';
import { AccordionComponent } from './components/cdk-features/cdk-components/accordion/accordion.component';
import { ClipboardComponent } from './components/cdk-features/cdk-components/clipboard/clipboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    CreateComponent,
    CardComponent,
    AboutComponent,
    AboutMoreComponent,
    PageNotFoundComponent,
    CDKFeaturesComponent,
    AddPanelComponent,
    EditPanelComponent,
    ViewPanelComponent,
    FilterPipe,
    MaterialTableComponent,
    AccordionComponent,
    ClipboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    ScrollingModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
