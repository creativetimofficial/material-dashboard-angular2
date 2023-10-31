import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'app/services/notification/notification.service';
import { UsersDataProService } from 'app/services/usersDataPro/users-data-pro.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hidePassword: boolean = true;
  user: any = {
    email: "",
    password: ""
  };

  constructor(private usersDataProService: UsersDataProService, private router: Router, private notificationsService: NotificationService) { }

  ngOnInit(): void {
  }

  login() {
    this.usersDataProService.login(this.user).subscribe(
      response => {
        const token = response.token;
        const user = response.user;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const userStorage = JSON.parse(storedUser);

          if (userStorage.isSuperAdmin) {
            console.log("isSuperAdmin");
            this.router.navigate(['/admin/dashboard']);
          } else {
            console.log("isNotSuperAdmin");
            this.router.navigate(['/admin/dashboard']);
          }
        }
        console.log('Utilisateur connecté avec succès!', response);
      },
      error => {
        console.error("Il y a eu une erreur lors de la connexion de l'utilisateur", error);
        this.notificationsService.showError("Email ou mot de passe incorrect");
      }
    );
  }
}
