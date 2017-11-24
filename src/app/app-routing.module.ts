import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'job/:id', component: JobDetailComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'advanced-search', component: AdvancedSearchComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

