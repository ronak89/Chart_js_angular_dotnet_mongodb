import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css',
})
export class LineChartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }
  public chart: any;

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          '2022-05-10',
          '2022-05-11',
          '2022-05-12',
          '2022-05-13',
          '2022-05-14',
          '2022-05-15',
          '2022-05-16',
          '2022-05-17',
        ],
        datasets: [
          {
            label: 'Sales',
            data: ['467', '576', '572', '79', '92', '574', '573', '576'],
            backgroundColor: 'blue',
          },
          {
            label: 'Profit',
            data: ['542', '542', '536', '327', '17', '0.00', '538', '541'],
            backgroundColor: 'limegreen',
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
  // createChart() {
  //   this.chart = new Chart('MyCharts', {
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
