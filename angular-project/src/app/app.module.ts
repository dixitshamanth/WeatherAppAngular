import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { ResultsComponent } from './results/results.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HighchartsChartModule } from 'highcharts-angular';
import { Chart1Component } from './chart1/chart1.component';
import { Chart2Component } from './chart2/chart2.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { FavComponent } from './fav/fav.component'
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
// import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    NavbarComponent,
    ResultsComponent,
    Chart1Component,
    Chart2Component,
    FavComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule,
    GoogleMapsModule,
    GooglePlaceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
