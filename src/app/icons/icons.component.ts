import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';
import { Utilisateur } from 'app/model/utilisateur';
import { RoleService } from 'app/services/role.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})

export class IconsComponent {
  // Déclaration d'un tableau d'utilisateur 
  // any : n'importe quel type de données 
  // ! ==> le tableau n'est pas initialisé 
  users!: any[];
  roles!: any[];
  utilisateur: Utilisateur = new Utilisateur();
  // DI  : par constructeur  
  constructor(private utilisateurService: UtilisateurService, private roleService: RoleService, private appService: AppService, private router: Router) { }
  ngOnInit(): void {
    this.findAllUtilisateurs();
    this.findAllRole();
  }

  findAllUtilisateurs() {
    // Utilisation de l'expression lambde dans le subscribe  
    // data => {this.users = data}   
    this.utilisateurService.findAll().subscribe(data => { this.users = data; });
  }

  findAllRole() {
    this.roleService.findAll().subscribe(data => { this.roles = data; });
  }
  saveUtilisateur() {
    this.utilisateurService.save(this.utilisateur).subscribe(
      () => {
        this.findAllUtilisateurs(); // MAJ la lise des utilisateurs
        this.utilisateur = new Utilisateur(); // Vider le formulaire
      }
    )
  }
  deleteUtilisateur(id: number) {
    this.utilisateurService.delete(id).subscribe(() => { this.findAllUtilisateurs(); })
  }

  editUtilisateur(utilisateur: Utilisateur) {
    // localStorage : créer un attribut (name="editUserId") dans le navigateur et lui affecter une valeur (ediUserId= idUtilisateur)   
    // étape 1 : MAJ du composant   
    localStorage.removeItem("editUtilisateurId");
    // étape 2 : Séleectionner une ligne    
    localStorage.setItem("editUtilisateurId", utilisateur.idUtilisateur.toString());
    this.router.navigate(['/editUtilisateur', utilisateur.idUtilisateur]);
  }
}


