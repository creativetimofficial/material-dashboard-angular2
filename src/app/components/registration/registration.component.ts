import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from 'app/model/utilisateur';
import { UtilisateurService } from 'app/services/utilisateur.service';
import * as bcrypt from 'bcryptjs'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  utilisateur: Utilisateur = new Utilisateur();
  myForm: FormGroup;
  constructor(private utilisateurService: UtilisateurService, private router: Router) { }
  ngOnInit(): void {
    this.saveUtilisateur();

    $('[name="btn1"]').click(function(){
      alert("Compte créé avec succés");
  })
  
  
  }

  saveUtilisateur() {
    this.utilisateurService.save(this.utilisateur).subscribe(
      () => {
        this.utilisateur = new Utilisateur();
      }
    )
  }
  onSubmit() {
    const password = this.myForm.get('password').value;
    const hashedPassword = bcrypt.hashSync(password, 10);

}
}
