import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Maison } from 'app/model/maison';
import { MaisonService } from 'app/services/maison.service';
import { OffreService } from 'app/services/offre.service';

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.scss']
})
export class MaisonComponent implements OnInit {

  maison: Maison = new Maison();

  maisonS!: any[];
  offres!: any[];

  constructor(private maisonService: MaisonService, private offreService: OffreService, private router: Router) {

  }

  ngOnInit(): void {
    this.findAllMaison();
    this.findAllOffres();
  }

  findAllMaison() {
    this.maisonService.findAll().subscribe(data => { this.maisonS = data; });
  }

  findAllOffres() {
    this.offreService.findAll().subscribe(data => { this.offres = data; });
  }

  saveMaison() {
    this.maisonService.save(this.maison).subscribe(
      () => {
        this.findAllMaison();
        this.maison = new Maison();
      }
    )
  }
  deleteMaison(id: number) {
    this.maisonService.delete(id).subscribe(
      () => {
        this.findAllMaison();
      }
    )
  }

}
