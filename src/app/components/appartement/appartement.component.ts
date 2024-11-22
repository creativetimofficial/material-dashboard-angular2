import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Appartement } from 'app/model/appartement';
import { AppartementService } from 'app/services/appartement.service';
import { OffreService } from 'app/services/offre.service';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.scss']
})
export class AppartementComponent implements OnInit {

  appartement: Appartement = new Appartement();

  appartementS!: any[];
  offres!: any[];  
  constructor(private appartementService: AppartementService, private offreService: OffreService, private router: Router) {
   
  }

  ngOnInit(): void {
    this.findAllAppartement();
    this.findAllOffres();

  }

  findAllAppartement() {
    this.appartementService.findAll().subscribe(data => { this.appartementS = data; });
  }

  findAllOffres() {
    this.offreService.findAll().subscribe(data => { this.offres = data; });
  }

  saveAppartement() {
    this.appartementService.save(this.appartement).subscribe(
      () => {
        this.findAllAppartement();
        this.appartement = new Appartement();
      }
    )
  }
  deleteAppartement(id: number) {
    this.appartementService.delete(id).subscribe(
      () => {
        this.findAllAppartement();
      }
    )
  }
 
}  