import { Component, OnInit } from '@angular/core';
import { Order } from 'app/models/order.model';
import { UsersDataPro } from 'app/models/usersDataPro.model';
import { UsersDataUser } from 'app/models/usersDataUser.model';
import { OrderService } from 'app/services/order/order.service';
import { UsersDataProService } from 'app/services/usersDataPro/users-data-pro.service';
import { UsersDataUserService } from 'app/services/usersDataUser/users-data-user.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
    ordersData: Order[] = [];
    usersData: UsersDataUser[] = [];
    prosData: UsersDataPro[] = [];

    constructor(private orderService: OrderService, private usersDataProService: UsersDataProService, private usersDataUserService: UsersDataUserService) { }

    ngOnInit(): void {
        this.loadAllOrdersData();
        this.loadAllUsersData();
        this.loadAllProsData();
    }

    loadAllOrdersData(): void {
        this.orderService.getAllOrders().subscribe(
            data => {
                this.ordersData = data;
            },
            error => {
                console.error('There was an error!', error);
            }
        );
    }

    loadAllUsersData(): void {
        this.usersDataUserService.getAllUsersDataUser().subscribe(
            data => {
                this.usersData = data;
            },
            error => {
                console.error('There was an error!', error);
            }
        );
    }

    loadAllProsData(): void {
        this.usersDataProService.getAllUsersDataPro().subscribe(
            data => {
                this.prosData = data;
            },
            error => {
                console.error('There was an error!', error);
            }
        );
    }

    getUserName(userId) {
        const user = this.usersData.find(userData => userData.id === userId);
        if (user) {
            return user.prenom + " " + user.nom;
        }
    }

    getProName(proId) {
        const pro = this.prosData.find(proData => proData.id === proId);
        if (pro) {
            return pro.entreprisenom;
        }
    }

    timestampToDate(timestamp: any): Date {
        return new Date(timestamp._seconds * 1000);
    }
}