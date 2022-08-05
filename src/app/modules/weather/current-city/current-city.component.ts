import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/shared/models/city';

@Component({
  selector: 'app-current-city',
  templateUrl: './current-city.component.html',
  styleUrls: ['./current-city.component.scss']
})
export class CurrentCityComponent implements OnInit {

  @Input() public cityName$: Observable<City> | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
