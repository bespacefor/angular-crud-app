import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { AboutMoreComponent } from './components/about-more/about-more.component';
import { CDKFeaturesComponent } from './components/cdk-features/cdk-features.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
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
