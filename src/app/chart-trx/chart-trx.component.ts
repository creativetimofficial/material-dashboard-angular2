import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PricingDTO} from '../dto/Data';
import {Chart} from 'chart.js';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-chart-trx',
  templateUrl: './chart-trx.component.html',
  styleUrls: ['./chart-trx.component.scss'],
  providers: [DatePipe]
})
export class ChartTrxComponent implements OnInit {
  title = 'app';
  url = 'https://api.coingecko.com/api/v3/coins/tron/market_chart?vs_currency=usd&days=1';
  time = [];
  price = [];
  chart = [];
  currentPrice: string;
  downup: number;
  constructor(private httpClient: HttpClient, private datePipe: DatePipe) {
    datePipe = new DatePipe('en-US');
  }
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  roundAndSetComma(n: number) {
    let getNumber = 3;
    if (n < 1) {
      for (let i = 1; i < 10; i++) {
        if (n / Math.pow(0.1, i) >= 1) {
          if (i + 2 > 3) {
            getNumber = i + 2;
          }
          break;
        }
      }
      return (Math.round(n * Math.pow(10, getNumber)) / Math.pow(10, getNumber)).toFixed(getNumber);
    } else {
      return this.numberWithCommas((Math.round(n * Math.pow(10, 2)) / Math.pow(10, 2)).toFixed(2));
    }
  }
  ngOnInit() {
    this.httpClient.get(this.url).subscribe((res: PricingDTO) => {
      // @ts-ignore
      this.downup = parseFloat(Math.round((res.prices[res.prices.length - 1][1] - res.prices[0][1]) / res.prices[0][1] * 10000) / 100).toFixed(2);
      // @ts-ignore
      this.currentPrice = this.roundAndSetComma(res.prices[res.prices.length - 1][1]);
      res.prices.forEach(y => {
        const date = this.datePipe.transform(y[0], 'hh:mm:ss');
        this.time.push(date);
        this.price.push(y[1]);
      });
      this.chart = new Chart('canvas-trx', {
        type: 'line',
        data: {
          labels: this.time,
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
                // display: false,
                // borderDash: [1, 2],
                color: 'rgba(0,0,0,0.0)',
              },
              ticks: {
                fontColor: '#FFF', // this here
                callback: function (value, index, values) {
                  return value;
                  // const timeSplit = value.split(':');
                  // console.log(timeSplit);
                  // if (timeSplit [1] !== '00') {
                  //   return '';
                  // } else {
                  //   return value;
                  // }
                }
              }
            }],
            yAxes: [{
              display: true,
              gridLines: {
                // display: false,
                // borderDash: [1, 2],
                color: 'rgba(0,0,0,0.0)',
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

