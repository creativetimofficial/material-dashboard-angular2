import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  utilisateur: Utilisateur = new Utilisateur();

  // Step 3
  idUser: any;
  editForm: FormGroup;
  user: Utilisateur = new Utilisateur();

  constructor(private appService: AppService, private utilisateurService: UtilisateurService, private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router) {

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
    // this.findAllUtilisateurs();
    //this.updateUtilisateur();
  }

  findAllUtilisateurs() {
    this.utilisateurService.findAll().subscribe(data => { this.users = data; });
  }

  updateUtilisateur() {
    console.log("update utilisateur", this.user);
    this.utilisateurService.save(this.user).subscribe(
      () => {
        console.log("Update ok");
      }
    )
  }
  //   this.utilisateurService.update(this.utilisateur).subscribe(
  //     () => {
  //       this.findAllUtilisateurs(); // MAJ la lise des utilisateurs
  //       this.utilisateur = new Utilisateur(); // Vider le formulaire
  //     }
  //   )
  // }
}