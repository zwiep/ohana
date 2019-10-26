import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../model/person";

@Component({
  selector: 'app-overview-result-row',
  templateUrl: './overview-result-row.component.html',
  styleUrls: ['./overview-result-row.component.scss']
})
export class OverviewResultRowComponent implements OnInit {

  @Input('person') person: Person;

  showDetail: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  resultRowClicked() {
    this.showDetail = !this.showDetail;
  }

  // detailRowClicked() {
  //   this.showDetail = !this.showDetail;
  // }
}
