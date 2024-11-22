import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.scss']
})
export class GarageComponent implements OnInit {

  garage: Garage = new Garage();

  garageS!: any[];
  offres!: any[];

  constructor(private garageService: GarageService, private offreService: OffreService, private router: Router) {

  }

  ngOnInit(): void {
    this.findAllGarage();
    this.findAllOffres();
  }

  findAllGarage() {
    this.garageService.findAll().subscribe(data => { this.garageS = data; });
  }

  findAllOffres() {
    this.offreService.findAll().subscribe(data => { this.offres = data; });
  }

  saveGarage() {
    this.garageService.save(this.garage).subscribe(
      () => {
        this.findAllGarage();
        this.garage = new Garage();
      }
    )
  }
  deleteGarage(id: number) {
    this.garageService.delete(id).subscribe(
      () => {
        this.findAllGarage();
      }
    )
  }
}
