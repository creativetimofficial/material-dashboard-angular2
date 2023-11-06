import { Component, OnInit } from '@angular/core';
import { UsersDataUserService } from 'app/services/usersDataUser/users-data-user.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  usersData: any[] = [];

  constructor(private usersDataUserService: UsersDataUserService) { }

  ngOnInit(): void {
    this.loadAllUsersData();
  }

  loadAllUsersData(): void {
    this.usersDataUserService.getAllUsersDataUser().subscribe(
      response => {
        this.usersData = response;
        console.log('Clients récupérés avec succès!', response);
      },
      error => {
        console.error('Il y a eu une erreur lors de la récupération des clients', error);
      }
    );
  }
}
