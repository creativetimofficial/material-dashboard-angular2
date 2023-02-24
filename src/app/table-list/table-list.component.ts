import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';
import { Offre } from 'app/model/offre';
import { OffreService } from 'app/services/offre.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  offres: any[];

  offre: Offre = new Offre();

  constructor(private offreService: OffreService, private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.findAllOffre();
  }

  findAllOffre() {
    this.offreService.findAll().subscribe(data => { this.offres = data; });
  }

}
