import { Component, OnInit } from '@angular/core';
import {Person} from "../model/person";
import {PERSON_DATA} from "../../assets/data/person-data";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class OverviewComponent implements OnInit {

  dataSource = PERSON_DATA;
  personsOverviewHeaders = ['lastName', 'firstName', 'streetName', 'houseNumber', 'birthDate'];
  expandedPerson: Person | null;


  constructor() { }

  ngOnInit() {
  }

}
