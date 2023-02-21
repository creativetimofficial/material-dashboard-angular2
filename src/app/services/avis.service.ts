import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

private BASE_URL = "http://localhost:8080/avis"
  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>
  { return this.httpClient.get(this.BASE_URL); }

  public save(avis:any) : Observable<any>
  { return this.httpClient.post(this.BASE_URL, avis); }

  public delete(id:number) : Observable<any>
  { return this.httpClient.delete(this.BASE_URL + "/" + id);}

  public findOne(id:number) : Observable<any>
  { return this.httpClient.get(this.BASE_URL + "/" + id); }

  public update(avis:any):Observable<any>{
    var avisJSON = JSON.parse(avis);
    return this.httpClient.put(this.BASE_URL + "/" + avisJSON.idavis, avisJSON);
  }

}
