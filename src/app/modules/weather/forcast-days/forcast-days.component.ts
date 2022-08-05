import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forcast-days',
  templateUrl: './forcast-days.component.html',
  styleUrls: ['./forcast-days.component.scss']
})
export class ForcastDaysComponent implements OnInit {

  @Input() public forcastDaysData$: Observable<any> | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
