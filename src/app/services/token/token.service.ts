import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/token`; 
  
  constructor(private http: HttpClient) { }

  // Générer un nouveau token
  generateToken(tokenData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/generate`, tokenData);
  }

  // Récupérer toutes les informations de tokens
  getAllTokens(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer des informations spécifiques de token
  getTokenById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour un token
  updateToken(id: string, updatedData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/update/${id}`, updatedData); 
  }

  // Révoquer un token
  revokeToken(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/revoke/${id}`); 
  }
}
