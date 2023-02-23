import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private BASE_URL = "http://localhost:8080/questions"

  constructor(private httpClient:HttpClient) { }

  public findAll() : Observable<any>
  { return this.httpClient.get(this.BASE_URL);}

  public save(question:any) : Observable<any>
  { return this.httpClient.post(this.BASE_URL, question); }

  public delete(id:number) : Observable<any>
  { return this.httpClient.delete(this.BASE_URL +"/" + id); }

  public findOne(id:number) : Observable<any>
  { return this.httpClient.get(this.BASE_URL + "/" + id); }

  public update(question:any):Observable<any>{
    var questionJSON = JSON.parse(question);
    return this.httpClient.put(this.BASE_URL + "/" + questionJSON.idquestion, questionJSON);
  }
}
