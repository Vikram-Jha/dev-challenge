/** Angular Imports */
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

/** Third-Party Imports */
import { forkJoin, Observable } from "rxjs";

/** Local Imports */
import { CurrentConditions } from "../../shared/models/weather";
import { map } from "rxjs/operators";
import { City } from "../../shared/models/city";
import { CityConditions } from "../../shared/models/city-conditions";
import { ForcastDays } from "src/app/shared/models/forecast-days";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private _http: HttpClient) { }

  /**
   * Make an HTTP call to the API for the current weather conditions in the city with the provided ID
   *
   * @param id
   */
  getCityConditions$(id: number): Observable<CurrentConditions> {
    return this._http.get<CurrentConditions>(`api/currentConditions/${id}`).pipe(map(response => response));
  }

  getCity$(id: number): Observable<City> {
    return this._http.get<City>(`api/cities/${id}`).pipe(map(response => response));
  }

  getForCastDays$(id: number): Observable<ForcastDays> {
    return this._http.get<ForcastDays>(`api/forecasts/${id}`).pipe(map(response => response));
  }
}
