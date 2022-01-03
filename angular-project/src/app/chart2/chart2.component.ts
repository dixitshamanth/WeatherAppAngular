import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { getOptions } from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');
let windbarb = require('highcharts/modules/windbarb');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);
windbarb(Highcharts);

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {

  @Input() tomorrowResponse!: any;

  constructor() {
  
  }

  ngOnInit() {

    class Meteogram {
      createChart!: () => void;
      error!: () => void;
      onChartLoad(chart: Highcharts.Chart) {
        throw new Error('Method not implemented.');
      }
      
      metData: any;
      container: string;
      humidity: any[];
      winds: any[];
      temperatures: any[];
      pressures: any[];
      getChartOptions!: () => any;
      drawBlocksForWindArrows!: (chart: { xAxis: any[]; renderer: { path: (arg0: any[]) => { (): any; new(): any; attr: { (arg0: { stroke: any; 'stroke-width': number; }): { (): any; new(): any; add: { (): void; new(): any; }; }; new(): any; }; }; }; plotTop: any; plotHeight: any; options: { chart: { plotBorderColor: any; }; }; get: (arg0: string) => { (): any; new(): any; markerGroup: { (): any; new(): any; attr: { (arg0: { translateX: any; }): void; new(): any; }; translateX: number; }; }; }) => void;
      resolution!: number;
      chart!: Highcharts.Chart;
      // drawBlocksForWindArrows!: () => any;
      constructor(metdata: any, container: any) {
        this.metData = metdata;
        this.container = container;
        this.humidity = [];
        this.winds = [];
        this.temperatures = [];
        this.pressures = [];
    
        // Run
        this.parseYrData();
        }
      parseYrData() {
        throw new Error('Method not implemented.');
      }
      // Parallel arrays for the chart data, these are populated as the JSON file
      // is loaded
  }
  
  
  /**
   * Build and return the Highcharts options structure
   */
  Meteogram.prototype.getChartOptions = function () {
      return {
          chart: {
              renderTo: this.container,
              marginBottom: 70,
              marginRight: 40,
              marginTop: 50,
              plotBorderWidth: 1,
              height: 450,
              alignTicks: true,
              scrollablePlotArea: {
                  minWidth: 720
              }
          },
  
          title: {
              text: 'Hourly Weather (For Next 5 Days)',
              align: 'center',
              style: {
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis'
              }
          },
  
          tooltip: {
              shared: true,
              useHTML: true,
              headerFormat:
                  '<small>{point.x:%A, %b %e, %H:%M}'
  
          },
  
          credits: {
              text: 'Forecast',
              position: {
                  x: -40
              }
          },
  
          xAxis: [{ // Bottom X axis
              type: 'datetime',
              tickInterval: 4 * 36e5, 
              minorTickInterval: 1 * 36e5,
              tickLength: 0,
              gridLineWidth: 1,
              gridLineColor: 'rgba(128, 128, 128, 0.1)',
              startOnTick: false,
              endOnTick: false,
              minPadding: 0,
              maxPadding: 0,
              offset: 30,
              showLastLabel: true,
              labels: {
                  format: '{value:%H}'
              },
              crosshair: true
          }, { // Top X axis
              linkedTo: 0,
              type: 'datetime',
              tickInterval: 24 * 3600 * 1000,
              labels: {
                  format: '{value:<span style="font-size: 12px; font-weight: bold">%a</span> %b %e}',
                  align: 'left',
                  x: 3,
                  y: -5
              },
              opposite: true,
              tickLength: 30,
              gridLineWidth: 0.5
          }],
  
          yAxis: [{ // temperature axis
              title: {
                  text: null
              },
              labels: {
                  format: '{value}\xB0',
                  style: {
                      fontSize: '10px'
                  },
                  x: -3
              },
              plotLines: [{ // zero plane
                  value: 0,
                  color: '#BBBBBB',
                  width: 1,
                  zIndex: 2
              }],
              maxPadding: 0.3,
              minRange: 8,
              tickInterval: 1,
              gridLineColor: 'rgba(128, 128, 128, 0.1)'
  
          }, { // humidity axis
              title: {
                  text: null
              },
              labels: {
                  enabled: false
              },
              gridLineWidth: 0,
              tickLength: 0,
              minRange: 10,
              min: 0
  
          }, { // Air pressure
              allowDecimals: false,
              title: { // Title on top of axis
                  text: 'inHG',
                  offset: 0,
                  align: 'high',
                  rotation: 0,
                  style: {
                      fontSize: '10px',
                      color: '#FEA611'
                  },
                  textAlign: 'left',
                  x: 3
              },
              labels: {
                  style: {
                      fontSize: '8px',
                      color: '#FEA611'
                  },
                  y: 2,
                  x: 3
              },
              gridLineWidth: 0,
              opposite: true,
              showLastLabel: false
          }],
  
          legend: {
              enabled: false
          },
  
          plotOptions: {
              series: {
                  pointPlacement: 'between'
              }
          },
  
  
          series: [{
              name: 'Temperature',
              data: this.temperatures,
              type: 'spline',
              marker: {
                  enabled: false,
                  states: {
                      hover: {
                          enabled: true
                      }
                  }
              },
              tooltip: {
                  pointFormat: '<br/><span style="color:{point.color}">\u25CF</span> ' +
                      '{series.name}: <b>{point.y}\xB0F</b><br/>'
              },
              zIndex: 1,
              color: '#FF3333',
              negativeColor: '#48AFE8'
          }, {
              name: 'Humidity',
              data: this.humidity,
              type: 'column',
              color: '#68CFE8',
              yAxis: 1,
              groupPadding: 0,
              pointPadding: 0,
              grouping: false,
              dataLabels: {
                  enabled: true,
                  filter: {
                      operator: '>',
                      property: 'y',
                      value: 0
                  },
                  style: {
                      fontSize: '8px',
                      color: 'grey'
                  }
              },
              tooltip: {
                  valueSuffix: ' %'
              }
          }, {
              name: 'Air pressure',
              color: '#FEA611',
              data: this.pressures,
              marker: {
                  enabled: false
              },
              shadow: false,
              tooltip: {
                  valueSuffix: ' inHg'
              },
              dashStyle: 'shortdot',
              yAxis: 2
          }, {
              name: 'Wind',
              type: 'windbarb',
              id: 'windbarbs',
              color: getOptions()?.colors?.[1],
              lineWidth: 1.5,
              data: this.winds,
              vectorLength: 18,
              yOffset: -15,
              tooltip: {
                  valueSuffix: ' mph'
              }
          }]
      };
  };
  
  /**
  * Draw blocks around wind arrows, below the plot area
  */
  Meteogram.prototype.drawBlocksForWindArrows = function (chart: { xAxis: any[]; renderer: { path: (arg0: any[]) => { (): any; new(): any; attr: { (arg0: { stroke: any; 'stroke-width': number; }): { (): any; new(): any; add: { (): void; new(): any; }; }; new(): any; }; }; }; plotTop: any; plotHeight: any; options: { chart: { plotBorderColor: any; }; }; get: (arg0: string) => { (): any; new(): any; markerGroup: { (): any; new(): any; attr: { (arg0: { translateX: any; }): void; new(): any; }; translateX: number; }; }; }) {
      const xAxis = chart.xAxis[0];
  
      for (
          let pos = xAxis.min, max = xAxis.max, i = 0;
          pos <= max + 36e5; pos += 36e5,
          i += 1
      ) {
  
          // Get the X position
          const isLast = pos === max + 36e5,
              x = Math.round(xAxis.toPixels(pos)) + (isLast ? 0.5 : -0.5);
  
          // Draw the vertical dividers and ticks
          const isLong = this.resolution > 36e5 ?
              pos % this.resolution === 0 :
              i % 2 === 0;
  
          chart.renderer
              .path([
                  'M', x, chart.plotTop + chart.plotHeight + (isLong ? 0 : 28),
                  'L', x, chart.plotTop + chart.plotHeight + 32,
                  'Z'
              ])
              .attr({
                  stroke: chart.options.chart.plotBorderColor,
                  'stroke-width': 1
              })
              .add();
      }
  
      // Center items in block
      chart.get('windbarbs').markerGroup.attr({
          translateX: chart.get('windbarbs').markerGroup.translateX + 8
      });
  
  };
  
  /**
   * Post-process the chart from the callback function, the second argument
   * Highcharts.Chart.
   */
  Meteogram.prototype.onChartLoad = function (chart: any) {
  
      this.drawBlocksForWindArrows(chart);
  
  };
  
  /**
   * Create the chart. This function is called async when the data file is loaded
   * and parsed.
   */
  Meteogram.prototype.createChart = function () {
      this.chart = new Highcharts.Chart(this.getChartOptions(), chart => {
          this.onChartLoad(chart);
      });
  };
  
  Meteogram.prototype.error = function () {
      document?.getElementById('loading')?.innerHTML? '<i class="fa fa-frown-o"></i> Failed loading data, please try again later': '';
  };
  
  /**
   * Handle the data. This part of the code is not Highcharts specific, but deals
   * with yr.no's specific data format
   */
  Meteogram.prototype.parseYrData = function () {
  
      let pointStart;
  
      if (!this.metData) {
          return this.error();
      }
  
      // Loop over hourly (or 6-hourly) forecasts
      this.metData.forEach((node: { startTime: string; values: { temperature: any; humidity: number; windSpeed: any; windDirection: any; pressureSeaLevel: any; }; }, i: number) => {            
  
          const x = Date.parse(node.startTime);
  
          this.temperatures.push({
              x,
              y: node.values.temperature,
          });
  
          this.humidity.push({
              x,
              y: Math.round(node.values.humidity)
          });
  
          if (i % 2 === 0) {
          this.winds.push({
              x,
              value: node.values.windSpeed,
              direction: node.values.windDirection
          });
          }
  
          this.pressures.push({
              x,
              y: node.values.pressureSeaLevel
          });
  
      });
  
      // Create the chart when the data is loaded
      this.createChart();
  };
  // End of the Meteogram protype
  
  
  // On DOM ready...
  
  new Meteogram(this.tomorrowResponse[1], 'chartcontainer2');

  }

}