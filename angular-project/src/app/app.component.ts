import { Component } from '@angular/core';
import { slideInAnimation } from './route-animation';
import { ViewChild } from '@angular/core';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {

  title = 'WeatherV2';

  ngOnInit():void{


  }
  
 
  }

