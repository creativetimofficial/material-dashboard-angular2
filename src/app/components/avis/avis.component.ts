import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {

  avis: Avis = new Avis();

  avisS!: any[];
  users!: any[];

  constructor(private avisService: AvisService, private utilisateurService: UtilisateurService, private router: Router) {

  }

  ngOnInit(): void {
    this.findAllAvis();
    this.findAllUtilisateurs();
  }

  findAllAvis() {
    this.avisService.findAll().subscribe(data => { this.avisS = data; });
  }

  findAllUtilisateurs() {
    this.utilisateurService.findAll().subscribe(data => { this.users = data; });
  }

  saveAvis() {
    this.avisService.save(this.avis).subscribe(
      () => {
        this.findAllAvis();
        this.avis = new Avis();
      }
    )
  }
  deleteAvis(id: number) {
    this.avisService.delete(id).subscribe(
      () => {
        this.findAllAvis();
      }
    )
  }

}
