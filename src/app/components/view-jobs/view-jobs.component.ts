import { Component, OnInit } from '@angular/core';

import { Job } from '../../models/job';
import { JobService } from '../../services/job.service';

@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css']
})
export class ViewJobsComponent implements OnInit {
  jobs: Job[];
  currentJobsToShow: Job[];
  professions: any[];
  search: {};
  selectedProfession = 'None';

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.professions = [
      {id: 0, title: 'Bus Monitor'},
      {id: 1, title: 'Occupational Therapist'},
      {id: 2, title: 'Speech Language Pathologist'},
      {id: 3, title: 'Speech Language Pathologist Assistant'}
    ];

    this.search = {
      title: '',
      employer: '',
      location: ''
    };

    this.currentJobsToShow = this.jobs;
    this.getJobs();

    console.log('Professions set: ', this.professions);
  }

  getJobs(): void {
    this.jobService.getJobs()
      .subscribe(jobs => { this.jobs = jobs; this.currentJobsToShow = jobs; });
  }

  doSearch(): void {
    console.log('Doing search.');
    this.currentJobsToShow = this.jobs;

    if (this.selectedProfession) {
      console.log('Filtering....');
      const pro = this.selectedProfession;
      this.currentJobsToShow = this.currentJobsToShow.filter(function (job) {
        console.log('Job: ', job);
        console.log('Profession filter by: ', pro);

        return job.profession === pro;
      });
    }
  }

}
