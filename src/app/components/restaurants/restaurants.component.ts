import { Component, OnInit } from '@angular/core';
import { UsersDataProService } from 'app/services/usersDataPro/users-data-pro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  usersData: any[] = [];

  constructor(private usersDataProService: UsersDataProService, private router: Router) { }

  ngOnInit(): void {
    this.loadAllUsersData();
  }

  loadAllUsersData(): void {
    this.usersDataProService.getAllUsersDataPro().subscribe(
      response => {
        this.usersData = response;
        console.log('Restaurants récupérés avec succès!', response);
      },
      error => {
        console.error('Il y a eu une erreur lors de la récupération des restaurants', error);
      }
    );
  }

  navigateToCreateRestaurant(): void {
    this.router.navigate(['/admin/restaurants/edit-restaurant']);
  }
}
