import { Component, OnInit } from '@angular/core';
import {PERSON_DATA} from "../../assets/data/person-data";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  dataSource = PERSON_DATA;

  constructor() { }

  ngOnInit() {
  }

}
