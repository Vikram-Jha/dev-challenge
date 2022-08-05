/** Angular Imports */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';

/** Third-Party Imports */
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

/** Local Imports */
import { ApiService } from "../api/api-service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityNavigationModule } from "./modules/city-navigation/city-navigation.module";
import { WeatherModule } from "./modules/weather/weather.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CityNavigationModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ApiService, { delay: 500 }),
    MatSidenavModule,
    MatListModule,
    WeatherModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
