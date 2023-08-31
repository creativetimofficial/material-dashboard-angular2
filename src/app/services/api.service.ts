import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormResponse } from 'app/models/form-response.model';
import { Form } from 'app/models/form.model';
import { LoginResponse } from 'app/models/login-response.model';
import { environment } from 'environments/environment';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = environment.net.base_uri;
  constructor(private http: HttpClient) { }

  login({ email, password }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/auth/login`, { email, password })
      .pipe(tap({
        next: response => {
          localStorage.setItem('a_t', response.token);
        },
        error: error => {
          console.error(error);
        }
      }));
  }

  signUp({ email, password, firstName, lastMutemi }): Observable<any> {
    return this.http.post(`${this.BASE_URL}/auth/login`, { email, password, firstName, lastMutemi });
  }

  getForm(id: string): Observable<Form> {
    return this.http.get<Form>(`${this.BASE_URL}/forms/${id}`);
  }

  listForms(): Observable<Form[]> {
    return this.http.get<Form[]>(`${this.BASE_URL}/forms`);
  }

  deleteForm(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/forms/${id}`);
  }

  submit(formResponse: FormResponse) {
    return this.http.post(`${this.BASE_URL}/form-response`, formResponse);
  }

  createForm(form: any) {
    return this.http.post(`${this.BASE_URL}/forms`, form);
  }

  updateForm(form: any) {
    return this.http.put(`${this.BASE_URL}/forms/${form.id}`, form);
  }
}
