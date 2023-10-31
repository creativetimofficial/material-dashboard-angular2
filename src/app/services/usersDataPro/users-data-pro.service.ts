import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service
import { UsersDataPro } from 'app/models/usersDataPro.model';

@Injectable({
  providedIn: 'root'
})
export class UsersDataProService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/usersDataPro`;

  constructor(private http: HttpClient) { }

  // Ajouter des informations professionnelles pour un utilisateur
  createUsersDataPro(userDataPro: UsersDataPro): Observable<UsersDataPro> {
    return this.http.post<UsersDataPro>(`${this.baseUrl}/add`, userDataPro);
  }

  // Ajouter des informations professionnelles pour un utilisateur
  login(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, user);
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/logout`, {});
  }

  // Récupérer toutes les informations professionnelles des utilisateurs
  getAllUsersDataPro(): Observable<UsersDataPro[]> {
    return this.http.get<UsersDataPro[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer des informations professionnelles spécifiques pour un utilisateur
  getUsersDataProById(id: string): Observable<UsersDataPro> {
    return this.http.get<UsersDataPro>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour des informations professionnelles pour un utilisateur
  updateUsersDataPro(id: string, updatedData: UsersDataPro): Observable<UsersDataPro> {
    return this.http.put<UsersDataPro>(`${this.baseUrl}/update/${id}`, updatedData);
  }

  // Supprimer des informations professionnelles pour un utilisateur
  deleteUsersDataPro(id: string): Observable<UsersDataPro> {
    return this.http.delete<UsersDataPro>(`${this.baseUrl}/delete/${id}`);
  }
}
