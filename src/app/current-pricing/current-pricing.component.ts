import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CoinPrice} from '../dto/Data';

@Component({
  selector: 'app-current-pricing',
  templateUrl: './current-pricing.component.html',
  styleUrls: ['./current-pricing.component.scss']
})

export class CurrentPricingComponent implements OnInit, OnDestroy {
  url = 'https://api.coingecko.com/api/v3/simple/price?ids=';
  coins = ['okb', 'binancecoin', 'huobi-token', 'kucoin-shares'];
  datas: CoinPrice[] = [
      { coinName: 'okb', ieo: 0.5, price: 0, ratio: 0},
    { coinName: 'binancecoin', ieo: 0.1, price: 0, ratio: 0},
    { coinName: 'huobi-token', ieo: 1.52, price: 0, ratio: 0},
    { coinName: 'kucoin-shares', ieo: 0.2, price: 0, ratio: 0},
  ];
  interval = setInterval(() => {
    this.refresh(); // api call
  }, 10000);
  constructor(private httpClient: HttpClient) {
    this.url = this.url + this.coins.toString() +  '&vs_currencies=usd';
  }
  refresh() {
    this.httpClient.get(this.url).subscribe((res: Object) => {
      console.log(res);
      console.log(res['okb'])
      this.datas.forEach(data => {
        // @ts-ignore
        data.price = res[data.coinName].usd;
        // @ts-ignore
        data.ratio = parseFloat(Math.round((data.price - data.ieo) / data.ieo * 10000) / 100).toFixed(2);
      });
    });
  }
  ngOnInit() {
    this.refresh();
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
