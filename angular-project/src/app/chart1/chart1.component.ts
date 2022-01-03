import { Component, Input, OnInit,OnChanges } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);

@Component({
  selector: 'app-chart1',
  templateUrl: './chart1.component.html',
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit {

  @Input() tomorrowResponse:any;

  chartData : any =[];

   highcharts = Highcharts;

  public chartOptions: any = {
    chart: {
            type: 'arearange',
            zoomType: 'x',
            scrollablePlotArea: {
                minWidth: 600,
                scrollPositionX: 1
            }
        },

        title: {
            text: 'Temperature Ranges (Min,Max)'
        },

        xAxis: {
            type: 'datetime',
        },

        yAxis: {
            title: {
                text: null
            }
        },
        plotOptions: {
            series: {
                fillColor:  {
                    linearGradient: [0, 0, 0, 230],
                    stops: [
                        [0, '#f9a928'],
                        [1, '#dbe7f5']
                    ]
                }
            }
        },

        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: String.fromCharCode(176) + 'F',
            xDateFormat: '%A, %b %e'
        },

        legend: {
            enabled: false
        },

        series: [{
            name: 'Temperatures',
            data: this.chartData,
            lineColor: '#f9a928'
        }]

    };

  constructor() { }

  ngOnInit(): void{
    Highcharts.chart('chartcontainer',this.chartOptions)
  }

  ngOnChanges(): void{

    
    for (let i = 0; i < this.tomorrowResponse[0].length; i++) {
        if (this.tomorrowResponse[0][i]) {
            let date = new Date(this.tomorrowResponse[0][i].Date)
            let tempMin = this.tomorrowResponse[0][i].temperatureMin
            let tempMax = this.tomorrowResponse[0][i].temperatureMax
            let temparray = [date.getTime(), tempMin, tempMax]
            this.chartData.push(temparray)
        }
    }
  }

}
