import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  username!: string;
  password!: string;
  credentials = { username: '', password: '' }
  constructor(private appService: AppService, private httpClient: HttpClient, private router: Router) { }


  login() {
    this.appService.authenticate(this.credentials, () => { this.router.navigateByUrl("/home") });
  }


  /*onSubmit(form:NgForm) {
    // Récupération des données du formulaire
    const username = form.value.username;
    const password = form.value.password;
 
 
    // Traitement de la soumission du formulaire
    console.log('Username : ' + username);
    console.log('Password : ' + password);
 
 
    // Envoi des données au serveur pour authentification
    // ...
 
 
    // Réinitialisation du formulaire
    form.reset();
  }*/


  ngOnInit(): void {
  }
}
