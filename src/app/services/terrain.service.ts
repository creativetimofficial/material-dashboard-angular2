import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerrainService {

  private BASE_URL = "http://localhost:8080/terrains"

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>
  { return this.httpClient.get(this.BASE_URL);}

  public save(terrain:any) : Observable<any>
  { return this.httpClient.post(this.BASE_URL, terrain); }

  public delete(id:number) : Observable<any>
  { return this.httpClient.delete(this.BASE_URL +"/" + id); }

  public findOne(id:number) : Observable<any>
  { return this.httpClient.get(this.BASE_URL + "/" + id); }

  public update(terrain:any):Observable<any>{
    var terrainJSON = JSON.parse(terrain);
    return this.httpClient.put(this.BASE_URL + "/" + terrainJSON.idterrain, terrainJSON);
  }
}
