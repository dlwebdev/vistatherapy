import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { JobsComponent } from './components/jobs/jobs.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from './components/messages/messages.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';

import { JobService } from './services/job.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
    JobsComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [JobService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
