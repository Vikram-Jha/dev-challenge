/** Angular Imports */
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Component, OnInit } from '@angular/core';

/** Third-Party Imports */
import { Observable, interval } from "rxjs";
import { filter, switchMap } from "rxjs/operators";

/** Local Imports */
import { WeatherService } from "./weather.service";
import { City } from "src/app/shared/models/city";
import { CurrentConditions } from "src/app/shared/models/weather";
import { ForcastDays } from "src/app/shared/models/forecast-days";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  /**
   * Observable of the currently selected city's weather conditions
   */
  public cityConditions$: Observable<CurrentConditions> | null = null;
  public forcastDaysData$: Observable<ForcastDays> | null = null;
  public cityName$: Observable<City> | null = null;

  constructor(
    public route: ActivatedRoute,
    public weatherService: WeatherService
  ) { }

  ngOnInit(): void { 

    interval(1000).subscribe(() => {
     // Obtain city and current conditions data from the id provided in the route parameters
     this.cityConditions$ = this.route.paramMap.pipe(
      // Only continue if an id was passed
      filter((paramMap: ParamMap) => !!paramMap.get('id')),
      // Get cityCondition data from the weather service
      switchMap((paramMap: ParamMap) => {
          return this.weatherService.getCityConditions$(parseInt(paramMap.get('id') as string));
      })
    );
    })

    this.cityName$ = this.route.paramMap.pipe(
      filter((paramMap: ParamMap) => !!paramMap.get('id')),
      switchMap((paramMap: ParamMap) => {
        return this.weatherService.getCity$(parseInt(paramMap.get('id') as string));
      })
    )

    this.forcastDaysData$ = this.route.paramMap.pipe(
      filter((paramMap: ParamMap) => !!paramMap.get('id')),
      switchMap((paramMap: ParamMap) => {
        return this.weatherService.getForCastDays$(parseInt(paramMap.get('id') as string));
      })
    )



  }


}
