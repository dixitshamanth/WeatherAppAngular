import { Component, OnInit,Input, OnChanges, SimpleChanges,EventEmitter, ChangeDetectionStrategy, Output } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
import {
  state,
  style,
  transition,
  animate,
  trigger
} from "@angular/animations";
import { analyzeAndValidateNgModules, ThrowStmt } from '@angular/compiler';


type PaneType = 'left' | 'right';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ]),
      trigger('slideUlta', [
      transition(':enter', [
        style({transform: 'translateX(+100%)'}),
        animate('200ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(+100%)'}))
      ])
    ])
  ]
})
export class ResultsComponent implements OnInit,OnChanges {

 

weatherMaps:any = {
    1000: [
        "Clear",
        "../../assets/Images/clear_day.svg",],
    1100: [
        "Mostly Clear",
        "../../assets//Images/mostly_clear_day.svg",
    ],
    1101: [
        "Partly Cloudy",
        "../../assets//Images/partly_cloudy_day.svg",
    ],
    1102: [
        "Mostly Cloudy",
        "../../assets//Images/mostly_cloudy.svg",
    ],
    1001: [
        "Cloudy",
        "../../assets//Images/cloudy.svg",
    ],
    2000: [
        "Fog",
        "../../assets//Images/fog.svg",
    ],
    2100: [
        "Light Fog",
        "../../assets//Images/fog_light.svg",
    ],
    8000: [
        "Thunderstorm",
        "../../assets//Images/tstorm.svg",
    ],
    5001: [
        "Flurries",
        "../../assets//Images/flurries.svg",
    ],
    5100: [
        "Light Snow",
        "../../assets//Images/snow_light.svg",
    ],
    5000: [
        "Snow",
        "../../assets//Images/snow.svg",
    ],
    5101: [
        "Heavy Snow",
        "../../assets//Images/snow_heavy.svg",
    ],
    7102: [
        "Light Ice Pellets",
        "../../assets//Images/ice_pellets_light.svg",
    ],
    7000: [
        "Ice Pellets",
        "../../assets//Images/ice_pellets.svg",
    ],
    7101: [
        "Heavy Ice Pellets",
        "../../assets//Images/ice_pellets_heavy.svg",
    ],
    4000: [
        "Drizzle",
        "../../assets//Images/drizzle.svg",
    ],
    6000: [
        "Freezing Drizzle",
        "../../assets//Images/freezing_drizzle.svg",
    ],
    6200: [
        "Light Freezing Rain",
        "../../assets//Images/freezing_rain_light.svg",
    ],
    6001: [
        "Freezing Rain",
        "../../assets//Images/freezing_rain.svg",
    ],
    6201: [
        "	Heavy Freezing Rain",
        "../../assets//Images/freezing_rain_heavy.svg",
    ],
    4200: [
        "	Light Rain",
        "../../assets//Images/rain_light.svg",
    ],
    4001: [
        "Rain",
        "../../assets//Images/rain.svg",
    ],
    4201: [
        "Heavy Rain",
        "../../assets//Images/rain_heavy.svg",
    ],
    3000: [
        "Light Wind",
        "../../assets//Images/light_wind.svg"
    ],
    3001: [
        "Wind",
        "../../assets//Images/wind.svg"
    ],
    3002: [
        "Strong wind",
        "../../assets//Images/strong_wind.svg"
    ]
}


  dayDict:any = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
   5: "Friday",
    6: "Saturday"
}

monthDict: any= { 0: 'Jan', 1: 'Feb', 2: 'Mar', 3: 'Apr', 4: 'May', 5: 'Jun', 6: 'Jul', 7: 'Aug', 8: 'Sep', 9: 'Oct', 10: 'Nov', 11: 'Dec' }

  formatDate(dateobj:any){
    let dateObject = new Date(dateobj)
    let day = this.dayDict[dateObject.getDay()]
    let date:any= dateObject.getDate()
    if (date < 10) date = "0" + date;
    let month = this.monthDict[dateObject.getMonth()]
    let year = dateObject.getFullYear()
    return day + ", " + date + " " + month + " " + year;
  }

  convertTime(dateobj:any){
    let myTime = new Date(dateobj)
    return myTime.getHours().toString()+":"+myTime.getMinutes().toString()+":"+myTime.getSeconds().toString()
  }


  activePane1 : PaneType ='left';
  activePane2: PaneType='right';
  @Input() ipdata:any;

  latForMap!:number;
  lngForMap!:number;

  marker:any;
  mapOptions!: google.maps.MapOptions;

  
  @Input() dataFromParent: any;

  day15:boolean =true;
  detailsTable: boolean =false;
  dayData: any;
  hasDetails: boolean=false;

  active1:boolean=true;
  active2:boolean=false;
  active3:boolean=false;

  viewTempChart:boolean=false;
  viewMeteogram:boolean=false;

  showNavtab:boolean=true;

  @Input() cityState:any;


showDetails(ind:any){
  this.hasDetails =true;
  this.dayData = this.dataFromParent[0][ind];
  this.day15 =false
  this.showNavtab=false;
  this.detailsTable = true;
  this.twitterString = "The weather in "+this.cityState+" on "+this.formatDate(this.dayData.Date)+" is "+this.dayData.temperature+" °F. The weather conditions are "+this.weatherMaps[this.dayData.weatherCode][0]
  // this.activePane='right';
 
}

switchDetails(){
  this.detailsTable =false;
  this.day15=true;
  this.showNavtab=true;
}

switchList(){
  this.day15=false;
  this.detailsTable=true;
   this.showNavtab=false;
}
  
viewdaily(){
  this.active1=true;
  this.active2=false;
  this.active3=false;
  this.day15=true;
  this.viewTempChart=false;
  this.viewMeteogram=false;
}

viewchart1(){
  this.active1=false;
  this.active2=true;
  this.active3=false;
  this.day15=false;
  this.viewTempChart=true;
  this.viewMeteogram=false;
}

viewchart2(){
  this.active1=false;
  this.active2=false;
  this.active3=true;
   this.day15=false;
  this.viewTempChart=false;
  this.viewMeteogram=true;
}



  constructor() { }

  ngOnInit() {
    this.handleFavorite('check')
   
  }

  twitterString:any;

  ngOnChanges(){


    // this.twitterString = "The weather in "+this.cityState+" on "+this.dayData.Date.formatDate()+" is "+this.dayData.temperature+" °F. The weather conditions are "+this.weatherMaps[this.dayData.weatherCode][0]
    this.hasDetails=false;

    this.latForMap = Number(parseFloat(this.dataFromParent[3].substring(0,7)).toFixed(4))

    this.lngForMap=Number(parseFloat(this.dataFromParent[3].substring(8)).toFixed(4))
 


   this.mapOptions = {
   center: { lat: this.latForMap, lng: this.lngForMap },
   zoom : 14
}
this.marker = {
   position: { lat: this.latForMap, lng: this.lngForMap },
}
    // Highcharts.chart('chartcontainer',this.chartOptions)
  }

  
  favData:any;
  @Output() callParent = new EventEmitter();


   favStatus:boolean = false;


  handleFavorite(param:any){
    let cityVal = this.cityState.split(",")[0];
    let stateVal = this.cityState.split(",")[1];

    let tempFavObj = {
      city : cityVal,
      state: stateVal 
    }
    let flag=0;
    let ind=-1;
    
    let favList = localStorage.getItem('favsArray')
    if(favList){
      let favListParsed = JSON.parse(favList);
      this.favData = favListParsed
      this.callParent.emit(this.favData)
      favListParsed.forEach((element:any)=> {

        if (element.city==tempFavObj.city){
          flag=1
          ind = favListParsed.indexOf(element)
        }
      });
      if(ind>=0){
        if(param=='modify'){
          favListParsed.splice(ind,1)
          this.favStatus = false
        }
        else{
          this.favStatus = true
        }
        
      }
      else{
        if(param=='modify'){
        favListParsed.push(tempFavObj)
        this.favStatus = true
        }
        else{
          this.favStatus = false
        }
      }
      let favListStringified = JSON.stringify(favListParsed)
      localStorage.setItem('favsArray',favListStringified)
    }
    else{
      if(param=='modify'){
      let newFavArray = [tempFavObj]
      let newArrayStringified = JSON.stringify(newFavArray)
      localStorage.setItem('favsArray',newArrayStringified)
      this.favStatus = true
      }
    }
  }





}
