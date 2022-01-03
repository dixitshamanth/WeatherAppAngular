import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import { fromEventPattern } from 'rxjs';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})

export class MyFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.setFavs();

    
  }

  setFavs(){
    let temp = localStorage.getItem('favsArray')
    if(temp) this.msgFromBaby=JSON.parse(temp)
    else this.msgFromBaby=[]
  }

  deleteFav(ind:any){
    let temp = localStorage.getItem('favsArray')
    if(temp) {
      let arr=JSON.parse(temp)
      arr.splice(ind,1)
      let json=JSON.stringify(arr)
      localStorage.setItem('favsArray',json)
  }
  this.setFavs()

}

 stateObj:any={
    AL: "Alabama",
    AK: "Alaska",
    AS: "American Samoa",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    DC: "District Of Columbia",
    FM: "Federated States Of Micronesia",
    FL: "Florida",
    GA: "Georgia",
    GU: "Guam",
    HI: "Hawaii",
    ID: "Idaho",
   IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MH: "Marshall Islands",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    MP: "Northern Mariana Islands",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PW: "Palau",
    PA: "Pennsylvania",
    PR: "Puerto Rico",
    RI: "Rhode Island",
   SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VI: "Virgin Islands",
    VA: "Virginia",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming"
}


  states = 
    [
    {
        name: "Alabama",
        abbreviation: "AL"
    },
    {
        name: "Alaska",
        abbreviation: "AK"
    },
    {
        name: "American Samoa",
        abbreviation: "AS"
    },
    {
        name: "Arizona",
        abbreviation: "AZ"
    },
    {
        name: "Arkansas",
        abbreviation: "AR"
    },
    {
        name: "California",
        abbreviation: "CA"
    },
    {
        name: "Colorado",
        abbreviation: "CO"
    },
    {
        name: "Connecticut",
        abbreviation: "CT"
    },
    {
        name: "Delaware",
        abbreviation: "DE"
    },
    {
        name: "District Of Columbia",
        abbreviation: "DC"
    },
    {
        name: "Federated States Of Micronesia",
        abbreviation: "FM"
    },
    {
        name: "Florida",
        abbreviation: "FL"
    },
    {
        name: "Georgia",
        abbreviation: "GA"
    },
    {
        name: "Guam",
        abbreviation: "GU"
    },
    {
        name: "Hawaii",
        abbreviation: "HI"
    },
    {
        name: "Idaho",
        abbreviation: "ID"
    },
    {
        name: "Illinois",
        abbreviation: "IL"
    },
    {
        name: "Indiana",
        abbreviation: "IN"
    },
    {
        name: "Iowa",
        abbreviation: "IA"
    },
    {
        name: "Kansas",
        abbreviation: "KS"
    },
    {
        name: "Kentucky",
        abbreviation: "KY"
    },
    {
        name: "Louisiana",
        abbreviation: "LA"
    },
    {
        name: "Maine",
        abbreviation: "ME"
    },
    {
        name: "Marshall Islands",
        abbreviation: "MH"
    },
    {
        name: "Maryland",
        abbreviation: "MD"
    },
    {
        name: "Massachusetts",
        abbreviation: "MA"
    },
    {
        name: "Michigan",
        abbreviation: "MI"
    },
    {
        name: "Minnesota",
        abbreviation: "MN"
    },
    {
        name: "Mississippi",
        abbreviation: "MS"
    },
    {
        name: "Missouri",
        abbreviation: "MO"
    },
    {
        name: "Montana",
        abbreviation: "MT"
    },
    {
        name: "Nebraska",
        abbreviation: "NE"
    },
    {
        name: "Nevada",
        abbreviation: "NV"
    },
    {
        name: "New Hampshire",
        abbreviation: "NH"
    },
    {
        name: "New Jersey",
        abbreviation: "NJ"
    },
    {
        name: "New Mexico",
        abbreviation: "NM"
    },
    {
        name: "New York",
        abbreviation: "NY"
    },
    {
        name: "North Carolina",
        abbreviation: "NC"
    },
    {
        name: "North Dakota",
        abbreviation: "ND"
    },
    {
        name: "Northern Mariana Islands",
        abbreviation: "MP"
    },
    {
        name: "Ohio",
        abbreviation: "OH"
    },
    {
        name: "Oklahoma",
        abbreviation: "OK"
    },
    {
        name: "Oregon",
        abbreviation: "OR"
    },
    {
        name: "Palau",
        abbreviation: "PW"
    },
    {
        name: "Pennsylvania",
        abbreviation: "PA"
    },
    {
        name: "Puerto Rico",
        abbreviation: "PR"
    },
    {
        name: "Rhode Island",
        abbreviation: "RI"
    },
    {
        name: "South Carolina",
        abbreviation: "SC"
    },
    {
        name: "South Dakota",
        abbreviation: "SD"
    },
    {
        name: "Tennessee",
        abbreviation: "TN"
    },
    {
        name: "Texas",
        abbreviation: "TX"
    },
    {
        name: "Utah",
        abbreviation: "UT"
    },
    {
        name: "Vermont",
        abbreviation: "VT"
    },
    {
        name: "Virgin Islands",
        abbreviation: "VI"
    },
    {
        name: "Virginia",
        abbreviation: "VA"
    },
    {
        name: "Washington",
        abbreviation: "WA"
    },
    {
        name: "West Virginia",
        abbreviation: "WV"
    },
    {
        name: "Wisconsin",
        abbreviation: "WI"
    },
    {
        name: "Wyoming",
        abbreviation: "WY"
    }
]

    showLoading: boolean = false;
    showResults: boolean = false;
    ipinfo_token: string = "9a3cc1c614ebc4";
    ipresponse :any;
    params:any;
    apiResult: any = [];
    disabled: boolean = false;
    gotIP:boolean =false;

    streetBlank: boolean = false;
    cityBlank: boolean =false;

    cityState:any;

    checkStreet(streetVar:any){
      if(streetVar.value.trim().length==0){
        this.streetBlank=true;
      }
      else{
        this.streetBlank=false;
      }
    }

    checkCity(cityVar:any){
     
      if(cityVar.value.trim().length==0){
        this.cityBlank=true;
      }
      else{
        this.cityBlank=false;
      }
    }


    showFavorites:boolean= false;
    activeResults:boolean=true;
    activeFavs:boolean=false;

    msgFromBaby:any;

    getMsgFromBaby($event:any) {this.msgFromBaby = $event;
    }

    switchToFavs(){
      this.setFavs()
      this.showResults=false;
      this.showFavorites=true;
      this.activeFavs=true;
      this.activeResults=false;
  }

  switchToResults(){
    this.showResults=true;
      this.showFavorites=false;
      this.activeFavs=false;
      this.activeResults=true;

    
  }



    async submit(formVar: any){
      console.log(formVar)
    this.activeResults=true;
    this.activeFavs=false;
    this.showFavorites=false;
    this.showResults =false;
    this.showLoading =true;
    console.log(formVar)
    if(formVar.autotick){
      // this.http.get('https://ipinfo.io?token='+this.ipinfo_token).subscribe(
      //   (response) => {
      //     console.log(response)
      //     this.ipresponse = response;
      //     this.params = new HttpParams().set("autoLocation","on").set("coord",this.ipresponse.loc);
    //   http://weatherapiv2csci571.us-east-2.elasticbeanstalk.com
          this.http.get('http://weatherapiv2csci571.us-east-2.elasticbeanstalk.com/search',{params: this.params}).subscribe(
          (response) => {
            this.apiResult=response;
            this.showLoading =false;
            this.showResults =true;
             this.cityState=this.ipresponse.city+","+this.ipresponse.region;
            console.log(response)
          },
          (error) => console.log(error)
        );
    //       },
    //       (error) => console.log(error)
    //     )
    }
    else{
        this.cityState=formVar.city+","+formVar.myState;
        this.params = new HttpParams().set("street",formVar.street).set("city",formVar.city).set("myState",formVar.myState);
        this.http.get('http://weatherapiv2csci571.us-east-2.elasticbeanstalk.com/search',{params: this.params}).subscribe(
        (response) => {
          this.apiResult=response;
          this.showLoading =false;
          this.showResults =true;
          console.log(response)
        },
        (error) => console.log(error)
      );
    }
  }

    handleClear(formVar: any){
      formVar.resetForm();
      this.showLoading = false;
      this.showResults = false;
      this.disabled = false;
      this.showFavorites=false;
      this.cityBlank =false;
      this.streetBlank=false;

    }

    handleAutoLoc(flag:boolean){
      this.disabled = !this.disabled
      if(!flag){
      this.http.get('https://ipinfo.io?token='+this.ipinfo_token).subscribe(
        (response) => {
          console.log(response)
          this.ipresponse = response;
          this.params = new HttpParams().set("autoLocation","on").set("coord",this.ipresponse.loc);
          this.gotIP=true;
         
    })
  }
    }

    autoCity:any = null;
    autoState:any =null;

    options = {
types: ['(cities)'],
componentRestrictions: { country: ['us'] }
} as unknown as Options;

  public handleAddressChange(address: any) {

   this.autoCity=address.address_components[0].long_name
   let predState=address.formatted_address.split(',')[1].trim()
   this.autoState=this.stateObj[predState];

 

}
}
