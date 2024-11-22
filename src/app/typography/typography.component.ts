import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';
import { enumEtatOffre, Offre } from 'app/model/offre';
import { OffreService } from 'app/services/offre.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  // Déclaration d'un tableau d'utilisateur 
  // any : n'importe quel type de données 
  // ! ==> le tableau n'est pas initialisé 
  currentFileUpload?: File;
  offres!: any[];
  offre: Offre = new Offre();
  etatOffre: enumEtatOffre;
  // DI  : par constructeur  
  constructor(private offreService: OffreService, private appService: AppService, private router: Router) { }
  ngOnInit(): void {
    this.findAllOffre();
  }

  findAllOffre() {
    // Utilisation de l'expression lambde dans le subscribe  
    // data => {this.users = data}   
    this.offreService.findAll().subscribe(data => { this.offres = data; });
  }

  saveOffre() {
    this.offreService.save(this.currentFileUpload, this.offre).subscribe(
      () => {
        this.findAllOffre();
        this.offre = new Offre();
      }
    )
  }
  deleteOffre(id: number) {
    this.offreService.delete(id).subscribe(() => { this.findAllOffre(); })
  }

  editOffre(offre: Offre) {
    // localStorage : créer un attribut (name="editUserId") dans le navigateur et lui affecter une valeur (ediUserId= idUtilisateur)   
    // étape 1 : MAJ du composant   
    localStorage.removeItem("editOffreId");
    // étape 2 : Séleectionner une ligne    
    localStorage.setItem("editOffreId", offre.idOffre.toString());
    this.router.navigate(['/editOffre', offre.idOffre]);
  }
}