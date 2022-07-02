import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { TextFieldModule } from '@angular/cdk/text-field';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkTableModule } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './components/about/about.component';
import { AboutMoreComponent } from './components/about-more/about-more.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CDKFeaturesComponent } from './components/cdk-features/cdk-features.component';
import { AddPanelComponent } from './components/add-panel/add-panel.component';

import { ViewPanelComponent } from './components/view-panel/view-panel.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MaterialTableComponent } from './components/material-table/material-table.component';
import { AccordionComponent } from './components/cdk-features/cdk-components/accordion/accordion.component';
import { ClipboardComponent } from './components/cdk-features/cdk-components/clipboard/clipboard.component';
import { DragAndDropComponent } from './components/cdk-features/cdk-components/drag-and-drop/drag-and-drop.component';
import { TreeComponent } from './components/cdk-features/cdk-components/tree/tree.component';
import { TextFieldComponent } from './components/cdk-features/cdk-components/text-field/text-field.component';
import { CdkTableComponent } from './components/cdk-features/cdk-components/cdk-table/cdk-table.component';
import { ScrollingComponent } from './components/cdk-features/cdk-components/scrolling/scrolling.component';
import { WeatherWidgetComponent } from './components/weather-widget/weather-widget.component';
import { FormsComponent } from './components/forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    CardComponent,
    AboutComponent,
    AboutMoreComponent,
    PageNotFoundComponent,
    CDKFeaturesComponent,
    AddPanelComponent,
    ViewPanelComponent,
    FilterPipe,
    MaterialTableComponent,
    AccordionComponent,
    ClipboardComponent,
    DragAndDropComponent,
    TreeComponent,
    TextFieldComponent,
    CdkTableComponent,
    ScrollingComponent,
    WeatherWidgetComponent,
    FormsComponent
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
    CdkAccordionModule,
    ClipboardModule,
    DragDropModule,
    TextFieldModule,
    CdkTreeModule,
    CdkTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
