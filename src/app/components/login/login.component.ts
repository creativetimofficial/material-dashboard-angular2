import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hidePassword = true;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login() {
    var user = ['email@email.fr','mdp']
    this.authenticationService.login(user);
  }
}
