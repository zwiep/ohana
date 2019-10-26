import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../model/person";

@Component({
  selector: 'app-overview-result-row-detail',
  templateUrl: './overview-result-row-detail.component.html',
  styleUrls: ['./overview-result-row-detail.component.scss']
})
export class OverviewResultRowDetailComponent implements OnInit {

  @Input('person') person: Person;

  constructor() { }

  ngOnInit() {
  }
}
