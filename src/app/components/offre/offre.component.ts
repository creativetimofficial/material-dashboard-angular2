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

  selectedFiles?: FileList;
  currentFileUpload?: File;
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

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }
  save() {
    this.currentFileUpload = this.selectedFiles?.item(0) as File;
    this.offreService.save(this.currentFileUpload, this.offre).subscribe(() => {
      this.findAllUtilisateurs();
      this.offre = new Offre();
      this.selectedFiles = undefined;
    })
  }
  deleteOffre(id: number) {
    this.offreService.delete(id).subscribe(
      () => {
        this.findAllOffre();
      }
    )
  }

}
