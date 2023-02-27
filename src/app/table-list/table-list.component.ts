import { HttpClient } from '@angular/common/http';
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
  offreRecherche: any;
  bien : any;
  ville: string;
  typeOffre: string;
  prix: number;
  surface: number;
  orientation: string;



  offre: Offre = new Offre();

  constructor(private httpClient:HttpClient, private offreService: OffreService, private appService: AppService, private router: Router) { }

  ngOnInit() {
    this.findAllOffre();
    this.ville ='';
    // this.typeOffre = '';
    // this.prix = 0;
    // this.surface = 0;
    // this.orientation = '';
    // this.bien = '';
    this.rechercher();



    $(document).ready(function(){
      $("#rechercheavancee").hide(); 
    $("#boutonrecherche").click(function(){
      $("#rechercheavancee").toggle(2500); 
  });
});
}

onSubmit(){
  this.rechercher();
}


  findAllOffre() {
    this.offreService.findAll().subscribe(data => { this.offres = data; });
  }

  rechercher(){
    this.offreService.rechercher(this.ville).subscribe(
        data => {this.offreRecherche=data;}); 
      
  }


}
