import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly baseUrl: string = `${environment.backendUrl}/authentication`;

  constructor(private http: HttpClient) { }

  login(user: any): Observable<any> {
    console.log("authentication");
    
    return this.http.post<any>(`${this.baseUrl}/login`, user);
  }
}
