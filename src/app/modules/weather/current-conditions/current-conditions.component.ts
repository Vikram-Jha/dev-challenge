/** Angular Imports */
import { Component, Input, OnInit } from '@angular/core';

/** Third-Party Imports */
import { Observable } from "rxjs";
import { CurrentConditions } from 'src/app/shared/models/weather';

/** Local Imports */
import { CityConditions } from "../../../shared/models/city-conditions";

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent implements OnInit {

  @Input() public cityConditions$: Observable<CurrentConditions> | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
