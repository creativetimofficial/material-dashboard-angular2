import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private BASE_URL = "http://localhost:8080/offres"

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>
  { return this.httpClient.get(this.BASE_URL);}

  public save(offre:any) : Observable<any>
  { return this.httpClient.post(this.BASE_URL, offre); }

  public delete(id:number) : Observable<any>
  { return this.httpClient.delete(this.BASE_URL +"/" + id); }

  public findOne(id:number) : Observable<any>
  { return this.httpClient.get(this.BASE_URL + "/" + id); }

  public update(offre:any):Observable<any>{
    var offreJSON = JSON.parse(offre);
    return this.httpClient.put(this.BASE_URL + "/" + offreJSON.idoffre, offreJSON);
  }
}
