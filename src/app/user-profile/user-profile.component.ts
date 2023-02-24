import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';
import { Utilisateur } from 'app/model/utilisateur';
import { RoleService } from 'app/services/role.service';
import { UtilisateurService } from 'app/services/utilisateur.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private BASE_URL = "http://localhost:8080/utilisateurs";
  users!: any[];
  roles!: any[];
  utilisateur: Utilisateur = new Utilisateur();

  // Step 3
  idUser: any;
  user: Utilisateur = new Utilisateur();

  constructor(private appService: AppService, private utilisateurService: UtilisateurService, private roleService: RoleService, private httpClient: HttpClient, private router: Router) {

  }
  // Step 5
  findOne(id: number) {
    this.utilisateurService.findOne(id).subscribe(data => { this.user = data; });
  }
  ngOnInit() {
    // Step 6
    this.idUser = this.appService.idUser;
    console.log("user profile " + this.idUser);
    this.findOne(this.idUser);
    this.findAllUtilisateurs();
    this.findAllRole();
  }

  findAllUtilisateurs() {
    this.utilisateurService.findAll().subscribe(data => { this.users = data; });
  }

  findAllRole() {
    this.roleService.findAll().subscribe(data => { this.roles = data; });
  }

  deleteUtilisateur(id: number) {
    this.utilisateurService.delete(id).subscribe(
      () => {
        this.findAllUtilisateurs();
      }
    )
  }

  updateProfil(value) {
    console.log(value);
  }
}
