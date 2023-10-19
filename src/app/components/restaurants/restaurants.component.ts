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
      data => {
        this.usersData = data;
        console.log(data);  // Traitez les données ici
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }

  navigateToCreateRestaurant(): void {
    this.router.navigate(['/restaurants/edit-restaurant']); // Remplacez par le chemin réel de la page de création de restaurant.
  }
}
