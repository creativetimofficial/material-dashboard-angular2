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
      data => {
        this.usersData = data;
        console.log(data);  // Traitez les données ici
      },
      error => {
        console.error('There was an error!', error);
      }
    );
  }
}
