/** Angular Imports */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Weather App';
  opened:boolean = false;
  constructor() {
  }

  ngOnInit(): void {
  }
  toggle(){
    this.opened = !this.opened;
  }
}
