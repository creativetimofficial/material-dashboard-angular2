import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.component.html',
  styleUrls: ['./visite.component.scss']
})
export class VisiteComponent implements OnInit {

  visite: Visite = new Visite();

  visites!: any[];
  offres!: any[];

  constructor(private visiteService: VisiteService, private offreService: OffreService, private router: Router) {

  }

  ngOnInit(): void {
    this.findAllVisite();
    this.findAllOffres();
  }

  findAllVisite() {
    this.visiteService.findAll().subscribe(data => { this.visites = data; });
  }

  findAllOffres() {
    this.offreService.findAll().subscribe(data => { this.offres = data; });
  }

  saveVisite() {
    this.visiteService.save(this.visite).subscribe(
      () => {
        this.findAllVisite();
        this.visite = new Visite();
      }
    )
  }
  deleteVisite(id: number) {
    this.visiteService.delete(id).subscribe(
      () => {
        this.findAllVisite();
      }
    )
  }


}
