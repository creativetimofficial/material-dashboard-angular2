import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

private BASE_URL = "http://localhost:8080/visites"

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>
  { return this.httpClient.get(this.BASE_URL);}

  public save(visite:any) : Observable<any>
  { return this.httpClient.post(this.BASE_URL, visite); }

  public delete(id:number) : Observable<any>
  { return this.httpClient.delete(this.BASE_URL + "/" + id); }

  public findOne(id:number) : Observable<any>
  { return this.httpClient.get(this.BASE_URL + "/" + id); }

  public update(visite:any):Observable<any>{
    var visiteJSON = JSON.parse(visite);
    return this.httpClient.put(this.BASE_URL + "/" + visiteJSON.idVisite, visiteJSON);
  }
}
