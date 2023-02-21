import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from 'app/model/offre';
import { OffreService } from 'app/services/offre.service';
import { UtilisateurService } from 'app/services/utilisateur.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {

  offre: Offre = new Offre();

  offres!: any[];
  users!: any[];

  constructor(private offreService: OffreService, private utilisateurService: UtilisateurService, private router: Router) {

  }

  ngOnInit(): void {
    this.findAllOffre();
    this.findAllUtilisateurs();
  }

  findAllOffre() {
    this.offreService.findAll().subscribe(data => { this.offres = data; });
  }

  findAllUtilisateurs() {
    this.utilisateurService.findAll().subscribe(data => { this.users = data; });
  }

  saveOffre() {
    this.offreService.save(this.offre).subscribe(
      () => {
        this.findAllOffre();
        this.offre = new Offre();
      }
    )
  }
  deleteOffre(id: number) {
    this.offreService.delete(id).subscribe(
      () => {
        this.findAllOffre();
      }
    )
  }

}
