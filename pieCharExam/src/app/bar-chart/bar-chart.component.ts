import { Component, OnInit } from '@angular/core';
//import { Chart } from 'chart.js';
import Chart, {
  BubbleDataPoint,
  ChartData,
  ChartTypeRegistry,
  Point,
} from 'chart.js/auto';
import { ChartService } from '../service/chart.service';
import { Observable } from 'rxjs';
import {
  AddChartDataRequest,
  ChartDat,
  Dataset,
} from '../models/ChartData.models';

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.css',
})
export class BarChartComponent implements OnInit {
  // chart$?: Observable<ChartData[]>;
  chart$?: Observable<
    ChartData<
      keyof ChartTypeRegistry,
      (number | [number, number] | Point | BubbleDataPoint | null)[],
      unknown
    >[]
  >;
  chart1$?: Observable<[]>;
  data: any;
  constructor(private ChartService: ChartService) {}

  ngOnInit(): void {
    // this.chart$ = this.ChartService.getAllCategories();
    // this.chart$.subscribe((response) => {
    //   console.log(response);
    // });
    this.ChartService.getAllCategories().subscribe((response) => {
      this.data = response;
      this.createChart();
      console.log(response);
    });
  }
  public chart: any;

  createChart(): void {
    // Create chart only when data is available
    if (this.data.length > 0) {
      debugger;
      const labels = this.data[0].labels;
      this.chart = new Chart('MyChart1', {
        type: 'bar', // This denotes the type of chart

        data: {
          labels: [
            '2022-05-10',
            '2022-05-11',
            '2022-05-12',
            '2022-05-13',
            '2022-05-14',
            '2022-05-15',
            '2022-05-16',
            '2022-05-17',
          ], // Use labels from fetched data
          datasets: this.data[0].datasets.map((dataItem: Dataset) => ({
            label: dataItem.label,
            data: dataItem.data,
            backgroundColor: dataItem.backgroundColor,
          })),
        },
        options: {
          aspectRatio: 2.5,
        },
      });
    }
  }

  // createChart() {
  //   this.chart = new Chart('MyChart', {
  //     type: 'bar', //this denotes tha type of chart

  //     data: {
  //       // values on X-Axis
  //       labels: [
  //         '2022-05-10',
  //         '2022-05-11',
  //         '2022-05-12',
  //         '2022-05-13',
  //         '2022-05-14',
  //         '2022-05-15',
  //         '2022-05-16',
  //         '2022-05-17',
  //       ],
  //       datasets: [
  //         {
  //           label: 'Sales',
  //           data: ['467', '576', '572', '79', '92', '574', '573', '576'],
  //           backgroundColor: 'blue',
  //         },
  //         {
  //           label: 'Profit',
  //           data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
  //           backgroundColor: 'limegreen',
  //         },
  //       ],
  //     },
  //     options: {
  //       aspectRatio: 2.5,
  //     },
  //   });
  // }
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy(); // Ensure the chart is destroyed when the component is destroyed
    }
  }
}
