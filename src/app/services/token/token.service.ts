import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service
import { Token } from 'app/models/token.model';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/token`; 
  
  constructor(private http: HttpClient) { }

  // Générer un nouveau token
  generateToken(tokenData: Token): Observable<Token> {
    return this.http.post<Token>(`${this.baseUrl}/generate`, tokenData);
  }

  // Récupérer toutes les informations de tokens
  getAllTokens(): Observable<Token[]> {
    return this.http.get<Token[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer des informations spécifiques de token
  getTokenById(id: string): Observable<Token> {
    return this.http.get<Token>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour un token
  updateToken(id: string, updatedData: Token): Observable<Token> {
    return this.http.put<Token>(`${this.baseUrl}/update/${id}`, updatedData); 
  }

  // Révoquer un token
  revokeToken(id: string): Observable<Token> {
    return this.http.delete<Token>(`${this.baseUrl}/revoke/${id}`); 
  }
}
