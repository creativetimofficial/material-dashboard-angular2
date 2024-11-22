import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {
private BASE_URL = "http://localhost:8080/appartements"
  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>
  { return this.httpClient.get(this.BASE_URL); }

  public save(appartement:any) : Observable<any>
  { return this.httpClient.post(this.BASE_URL, appartement); }

  public delete(id:number) : Observable<any>
  { return this.httpClient.delete(this.BASE_URL + "/" + id); }
  
  public findOne(id:number) : Observable<any>
  { return this.httpClient.get(this.BASE_URL + "/" + id);}

  public update(appartement:any):Observable<any>{
    var appartementJSON = JSON.parse(appartement);
    return this.httpClient.put(this.BASE_URL + "/" + appartementJSON.idappartement, appartementJSON);
  }
}
