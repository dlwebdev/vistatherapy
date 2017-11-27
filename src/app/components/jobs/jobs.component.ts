import { Component, OnInit } from '@angular/core';

import { Job } from '../../models/job';
import { JobService } from '../../services/job.service';

// import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: Job[];
  currentJobsToShow: Job[];

  professions: any[];

  search: {};
  selectedJob: {};

  selectedProfession = 'None';

  // Used for paginator
  loading = false;
  total = 0;
  page = 1;
  limit = 20;
  // end paginator variables

  constructor(private jobService: JobService) { }

  ngOnInit() {
    this.professions = [];

    this.search = {
      title: '',
      employer: '',
      location: ''
    };

    this.getJobs();
    this.loading = true;
    this.currentJobsToShow = this.jobs;

    console.log('Professions set: ', this.professions);
  }

  getUniqueValuesOfKey(array, key) {
    return array.reduce(function(carry, item){
      if (item[key] && !~carry.indexOf(item[key])) {
        carry.push(item[key]);
      }
      return carry;
    }, []);
  }

  getJobs(): void {
    this.jobService.getJobs()
      .subscribe(jobs => {
        this.jobs = jobs;
        this.currentJobsToShow = jobs.slice(0, this.limit - 1);
        this.total = jobs.length;
        this.professions = this.getUniqueValuesOfKey(jobs, 'profession').sort();
        console.log('Professions: ', this.professions);
      });
  }

  doSearch(): void {
    this.currentJobsToShow = this.jobs;

    if (this.selectedProfession && this.selectedProfession !== 'None') {
      const pro = this.selectedProfession;
      this.currentJobsToShow = this.currentJobsToShow.filter(function (job) {
        return job.profession === pro;
      });
    }
    this.total = this.currentJobsToShow.length;
    this.page = 1;
  }

  showPageOfJobs(): void {
    this.currentJobsToShow = this.jobs.slice(this.getStartIndex(), this.getEndIndex());
  }


  goToPage(n: number): void {
    this.page = n;
    this.showPageOfJobs();
  }

  onNext(): void {
    this.page++;
    this.showPageOfJobs();
  }

  onPrev(): void {
    this.page--;
    this.showPageOfJobs();
  }

  getStartIndex(): number {
    return ((this.limit * this.page) - this.limit) + 1;
  }

  getEndIndex(): number {
    let max = this.limit * this.page;
    if (max > this.total) {
      max = this.total;
    }
    return max;
  }

  selectJob(i: number): void {
    console.log('Index of job chosen: ', i);
    this.selectedJob = this.currentJobsToShow[i];
    console.log('Selected Job: ', this.selectedJob);
  }

  clearSelectedJob(): void {
    this.selectedJob = null;
  }

}
