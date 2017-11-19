import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Job } from '../models/job';
import { JOBS } from '../mock-jobs';
import { MessageService } from './message.service';

@Injectable()
export class JobService {
  constructor(private messageService: MessageService) { }

    getJobs(): Observable<Job[]> {
      // Todo: send the message _after_ fetching the jobs
      this.messageService.add('JobService: fetched jobs');
      return of(JOBS);
    }

    getJob(id: number): Observable<Job> {
      // Todo: send the message _after_ fetching the hero
      this.messageService.add(`JobService: fetched job id=${id}`);
      return of(JOBS.find(job => job.id === id));
    }
}
