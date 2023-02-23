import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarageService {

  private BASE_URL = "http://localhost:8080/garages"
  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>
  {return this.httpClient.get(this.BASE_URL); }

  public save(garage:any) : Observable<any>
  { return this.httpClient.post(this.BASE_URL, garage);}

  public delete(id:number) : Observable<any>
  { return this.httpClient.delete(this.BASE_URL + "/" + id); }

  public findOne(id:number) : Observable<any>
  { return this.httpClient.get(this.BASE_URL + "/" + id); }

  public update(garage:any):Observable<any>{
    var garageJSON = JSON.parse(garage);
    return this.httpClient.put(this.BASE_URL + "/" + garageJSON.idgarage, garageJSON);
  }
}
