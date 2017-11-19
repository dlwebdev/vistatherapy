import { Component, OnInit } from '@angular/core';

import { Job } from '../../models/job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[];

    constructor(private jobService: JobService) { }

    ngOnInit() {
      console.log('Getting jobs...');
      this.getJobs();
    }

    getJobs(): void {
      this.jobService.getJobs()
      .subscribe(jobs => this.jobs = jobs);
    }
}
