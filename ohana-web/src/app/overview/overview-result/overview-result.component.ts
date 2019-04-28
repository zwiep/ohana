import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../model/person";

@Component({
  selector: 'app-overview-result',
  templateUrl: './overview-result.component.html',
  styleUrls: ['./overview-result.component.scss']
})
export class OverviewResultComponent implements OnInit {

  @Input('persons') persons: Person[];

  constructor() { }

  ngOnInit() {
  }

}
