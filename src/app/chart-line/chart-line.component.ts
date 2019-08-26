import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Data} from '../dto/Data';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent implements OnInit {
  title = 'app';
  data: Data[];
  url = 'http://localhost:4000/results';
  month = [];
  price = [];
  chart = [];
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: Data[]) => {
      res.forEach(y => {
        this.month.push(y.month);
        this.price.push(y.price);
      });
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.month,
          datasets: [
            {
              data: this.price,
              borderColor: '#FFF',
              fill: false
            }
          ]
        },
        options: {
          elements: {
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 10
            }
          },
          legend: {
            display: false,
          },
          scales: {
            xAxes: [{
              display: true,
              gridLines: {
                borderDash: [1, 2],
                color: 'rgba(255,255,255,0.3)',
              },
              ticks: {
                fontColor: '#FFF', // this here
                callback: function(value, index, values) {
                  if (index % 3 !== 0) {
                    return '';
                  } else {
                    return value;
                  }
                }
              }
            }],
            yAxes: [{
              display: true,
              gridLines: {
                borderDash: [1, 2],
                color: 'rgba(255,255,255,0.3)',
              },
              ticks: {
                fontColor: '#FFF', // this here
              }
            }],
          }
        }
      });
    });
  }
}
