import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MaisonService {
  private BASE_URL = "http://localhost:8080/maisons"
  constructor(private  httpClient:HttpClient) { }

  public findAll() : Observable<any>
  { return this.httpClient.get(this.BASE_URL);}

  public save(maison:any) : Observable<any>
  { return this.httpClient.post(this.BASE_URL, maison); }

  public delete(id:number) : Observable<any>
  { return this.httpClient.delete(this.BASE_URL + "/" + id); }

  public findOne(id:number) : Observable<any>
  { return this.httpClient.get(this.BASE_URL + "/" + id); }

  public update(maison:any):Observable<any>{
    var maisonJSON = JSON.parse(maison);
    return this.httpClient.put(this.BASE_URL + "/" + maisonJSON.idmaison, maisonJSON);
  }
}
