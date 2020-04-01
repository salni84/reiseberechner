import {Component, OnInit, ViewChild} from '@angular/core';
import {Reisen} from "../reisen/reisen.component";
import {HttpClientService} from "../service/http-client.service";

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
 @ViewChild("chart", {static: true} ) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  gaPreis: number = 5265;
  gaPerMonth: number = Math.round((this.gaPreis/12)*100)/100;

  constructor(private httpService: HttpClientService) {
    this.chartOptions = {
      series: [
        {
          name: "GA-Preis pro Monat",
          data: [this.gaPerMonth, this.gaPerMonth, this.gaPerMonth, this.gaPerMonth, this.gaPerMonth, this.gaPerMonth, this.gaPerMonth, this.gaPerMonth, this.gaPerMonth,
          this.gaPerMonth, this.gaPerMonth, this.gaPerMonth]
        },
        {
          name: "Einzelbillete",
          data: [ 110, 140, 180, 170, 130, 130]
        }
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      colors: ["#77B6EA", "#545454"],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      title: {
      text: "Chart",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
        title: {
          text: "Month"
        }
      },
      yaxis: {
        title: {
          text: "Reisekosten"
        },
        min: 50,
        max: 1000
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    };
  }

  ngOnInit(): void {
  }

}


