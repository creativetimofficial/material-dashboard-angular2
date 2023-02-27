import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Terrain } from 'app/model/terrain';
import { OffreService } from 'app/services/offre.service';
import { TerrainService } from 'app/services/terrain.service';

@Component({
  selector: 'app-terrain',
  templateUrl: './terrain.component.html',
  styleUrls: ['./terrain.component.scss']
})
export class TerrainComponent implements OnInit {

  terrain: Terrain = new Terrain();

  terrainS!: any[];
  offres!: any[];

  constructor(private terrainService: TerrainService, private offreService: OffreService, private router: Router) {

  }

  ngOnInit(): void {
    this.findAllTerrain();
    this.findAllOffres();
  }

  findAllTerrain() {
    this.terrainService.findAll().subscribe(data => { this.terrainS = data; });
  }

  findAllOffres() {
    this.offreService.findAll().subscribe(data => { this.offres = data; });
  }

  saveTerrain() {
    this.terrainService.save(this.terrain).subscribe(
      () => {
        this.findAllTerrain();
        this.terrain = new Terrain();
      }
    )
  }
  deleteTerrain(id: number) {
    this.terrainService.delete(id).subscribe(
      () => {
        this.findAllTerrain();
      }
    )
  }
}
