import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormsComponent } from './components/forms/forms.component';
import { AboutComponent } from './components/about/about.component';
import { AboutMoreComponent } from './components/about-more/about-more.component';
import { CDKFeaturesComponent } from './components/cdk-features/cdk-features.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewPanelComponent } from './components/view-panel/view-panel.component';
import { CrudComponent } from './components/crud/crud.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'blog/:id', component: ViewPanelComponent },
  {
    path: 'about', component: AboutComponent, children: [
      { path: 'more', component: AboutMoreComponent }
    ]
  },
  { path: 'cdk', component: CDKFeaturesComponent },
  { path: 'error404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/error404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
