import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './components/messages/messages.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { FooterComponent } from './components/footer/footer.component';

import { JobService } from './services/job.service';
import { MessageService } from './services/message.service';
import { AdvancedSearchComponent } from './components/advanced-search/advanced-search.component';
import { ViewJobsComponent } from './components/view-jobs/view-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    MessagesComponent,
    JobsComponent,
    JobDetailComponent,
    AdvancedSearchComponent,
    ViewJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [JobService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
