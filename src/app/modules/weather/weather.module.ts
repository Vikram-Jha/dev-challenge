/** Angular Imports */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'

/** Local Imports */
import { CurrentConditionsComponent } from "./current-conditions/current-conditions.component";
import { WeatherComponent} from "./weather.component";
import { ForcastDaysComponent } from './forcast-days/forcast-days.component';
import { CurrentCityComponent } from './current-city/current-city.component';


@NgModule({
  declarations: [
    WeatherComponent,
    CurrentConditionsComponent,
    ForcastDaysComponent,
    CurrentCityComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class WeatherModule { }
