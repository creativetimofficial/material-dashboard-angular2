import { Component, OnInit } from '@angular/core';
import { OrderService } from 'app/services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ordersData: any[] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.loadAllUsersData();
  }

  loadAllUsersData(): void {
    this.orderService.getAllOrders().subscribe(
      data => {
        this.ordersData = data;
        console.log(data[0].date);
        
        console.log(data); 
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  timestampToDate(timestamp: any): Date {
    return new Date(timestamp._seconds * 1000);
  }  
}
