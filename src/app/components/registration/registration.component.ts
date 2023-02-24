import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  user!:any[];

  utilisateur: Utilisateur = new Utilisateur();
  constructor(private utilisateurService: UtilisateurService, private router: Router) { }
  ngOnInit(): void {
    this.saveUtilisateur();
    $('[name="btn1"]').click(function(){
      alert("Compte créé avec succés");
  })
  
  }

  saveUtilisateur() {
    this.utilisateurService.save(this.user).subscribe(
      () => {
        this.utilisateur = new Utilisateur();
      }
    )
  }
}

