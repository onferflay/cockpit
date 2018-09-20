import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import * as Highcharts from 'highcharts';
import * as hmaps from 'highcharts/modules/map';
import * as hc from 'highcharts/highcharts';
import * as europe from 'highcharts/europe';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css']
})
export class WorldmapComponent implements OnInit {

  constructor() { }

  chart : any;

  ngOnInit() {

 // this.chart = new Chart({
 //            chart: { 
 //                spacingBottom: 20,
 //                backgroundColor: '#FFF',
 //                style: {fontFamily: 'inherit'}
 //            },
 //            title: {
 //                text: 'Viorel ian vezi!'
 //            },

 //    mapNavigation: {
 //        enabled: true,
 //        buttonOptions: {
 //            verticalAlign: 'bottom'
 //        }
 //    },

 //            plotOptions: {
 //            map: {
 //                allAreas: false,
 //                joinBy: ['iso-a2', 'code'],
 //                dataLabels: {
 //                    enabled: true,
 //                    color: '#FFFFFF',
 //                    formatter: function () {
 //                        if (this.point.properties && this.point.properties.labelrank.toString() < 5) {
 //                            return this.point.properties['iso-a2'];
 //                        }
 //                    },
 //                    format: null,
 //                    style: {
 //                        fontWeight: 'bold'
 //                    }
 //                },
 //                mapData: Highcharts.maps["custom/europe"],
 //                tooltip: {
 //                    headerFormat: '',
 //                    pointFormat: '{point.name}: <b>{series.name}</b>'
 //                }

 //            }
 //        },

 //    series: [{
 //        name: 'UTC',
 //        data: ['IE', 'IS', 'GB', 'PT'].map(function (code) {
 //            return { code: code };
 //        })
 //    }, {
 //        name: 'UTC + 1',
 //        data: ['NO', 'SE', 'DK', 'DE', 'NL', 'BE', 'LU', 'ES', 'FR', 'PL', 'CZ', 'AT', 'CH', 'LI', 'SK', 'HU',
 //            'SI', 'IT', 'SM', 'HR', 'BA', 'YF', 'ME', 'AL', 'MK'].map(function (code) {
 //                return { code: code };
 //            })
 //    }, {
 //        name: 'UTC + 2',
 //        data: ['FI', 'EE', 'LV', 'LT', 'BY', 'UA', 'MD', 'RO', 'BG', 'GR', 'TR', 'CY'].map(function (code) {
 //            return { code: code };
 //        })
 //    }, {
 //        name: 'UTC + 3',
 //        data: [{
 //            code: 'RU'
 //        }]
 //    }]
 //        });
    }
}
