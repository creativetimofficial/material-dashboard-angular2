import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/model/utilisateur';
import { RoleService } from 'app/services/role.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {

  users!: any[];
  roles!: any[];
  selectedFiles?: FileList;
  currentFileUpload?: File;
  utilisateur: Utilisateur = new Utilisateur();

  constructor(private utilisateurService: UtilisateurService, private roleService: RoleService, private router: Router) {

  }

  ngOnInit(): void {
    this.findAllUtilisateurs();
    this.findAllRole();
  }

  findAllUtilisateurs() {
    this.utilisateurService.findAll().subscribe(data => { this.users = data; });
  }

  findAllRole() {
    this.roleService.findAll().subscribe(data => { this.roles = data; });
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }


  //Méthode save : 
  save() {
    this.currentFileUpload = this.selectedFiles?.item(0) as File;
    this.utilisateurService.save(this.currentFileUpload, this.utilisateur).subscribe(() => {
      this.findAllUtilisateurs();
      this.utilisateur = new Utilisateur();
      this.selectedFiles = undefined;
    })

  }
  deleteUtilisateur(id: number) {
    this.utilisateurService.delete(id).subscribe(
      () => {
        this.findAllUtilisateurs();
      }
    )
  }

}
