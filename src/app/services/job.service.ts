import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Job } from '../models/job';
import { JOBS } from '../mock-jobs';
import { MessageService } from './message.service';

@Injectable()
export class JobService {
  constructor(private http: Http, private messageService: MessageService) { }

    getJobs(): Observable<Job[]> {
      // Todo: send the message _after_ fetching the jobs
      this.messageService.add('JobService: fetching jobs');

      return this.http.get('/api/jobs')
        .map(res => res.json());

      // return of(JOBS);
    }

    getJob(id: number): Observable<Job> {
      // Todo: send the message _after_ fetching the hero
      this.messageService.add(`JobService: fetched job id=${id}`);
      return of(JOBS.find(job => job.id === id));
    }
}
