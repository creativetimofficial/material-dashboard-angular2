import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormResponse } from 'app/models/form-response.model';
import { Form } from 'app/models/form.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = 'http://localhost:9001';
  constructor(private http: HttpClient) { }

  getForm(id: string): Observable<Form> {
    return this.http.get<Form>(`${this.BASE_URL}/form/${id}`);
  }

  submit(formResponse: FormResponse) {
    return this.http.post(`${this.BASE_URL}/form-response`, formResponse);
  }
}
