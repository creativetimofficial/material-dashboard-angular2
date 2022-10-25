import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';
import { environment } from 'environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = environment.baseUrl + '/contacts';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl);
  }

  get(id: any): Observable<Contact> {
    return this.http.get<Contact>(`${this.baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }


}
