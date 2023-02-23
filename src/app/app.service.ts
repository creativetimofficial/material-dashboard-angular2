import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  // Authentification
  authenticated = false;
  responseAll: any;
  // Autorisation :
  isAdmin = false;
  isGerant = false;
  isClient = false;
  // Step 1
  idUser: any;
  constructor(private httpClient: HttpClient, private router: Router) { }

  authenticate(credentials: any, callback: any) {
    const headersAgency = new HttpHeaders(
      credentials ? {
        authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
      } : {}
    );
    this.httpClient.get('http://localhost:8080/login/user', { headers: headersAgency }).subscribe(response => {
      this.responseAll = response; // objet = utilisateur
      console.log("responseAll=" + this.responseAll);
      // Step 2
      this.idUser = this.responseAll['idUtilisateur'];
      if (this.responseAll['username']) {
        this.authenticated = true;
        // vérification des profils :
        for (let i = 0; i < this.responseAll['roles'].length; i++) {
          if (this.responseAll['roles'][i]['idRole'] == 1) {
            this.isAdmin = true;
          }
          if (this.responseAll['roles'][i]['idRole'] == 2) {
            this.isGerant = true;
          }
          if (this.responseAll['roles'][i]['idRole'] == 3) {
            this.isClient = true;
          }
        }
      } else {
        this.authenticated = false;
      }
      return callback && callback();
    })
  }
}
