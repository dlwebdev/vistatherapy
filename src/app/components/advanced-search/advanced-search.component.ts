import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  jobs: any[];
  professions: any[];
  search: {};
  selectedProfession = -1;

  constructor() { }

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

    console.log('Professions set: ', this.professions);
  }

}
