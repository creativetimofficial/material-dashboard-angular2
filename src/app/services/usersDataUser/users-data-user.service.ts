import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service
import { UsersDataUser } from 'app/models/usersDataUser.model';

@Injectable({
  providedIn: 'root'
})
export class UsersDataUserService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/usersDataUser`; 
  
  constructor(private http: HttpClient) { }

  // Ajouter des informations pour un utilisateur
  createUsersDataUser(userData: UsersDataUser): Observable<UsersDataUser> {
    return this.http.post<UsersDataUser>(`${this.baseUrl}/add`, userData);
  }

  // Récupérer toutes les informations des utilisateurs
  getAllUsersDataUser(): Observable<UsersDataUser[]> {
    return this.http.get<UsersDataUser[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer des informations spécifiques pour un utilisateur
  getUsersDataUserById(id: string): Observable<UsersDataUser> {
    return this.http.get<UsersDataUser>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour des informations pour un utilisateur
  updateUsersDataUser(id: string, updatedData: UsersDataUser): Observable<UsersDataUser> {
    return this.http.put<UsersDataUser>(`${this.baseUrl}/update/${id}`, updatedData);
  }

  // Supprimer des informations pour un utilisateur
  deleteUsersDataUser(id: string): Observable<UsersDataUser> {
    return this.http.delete<UsersDataUser>(`${this.baseUrl}/delete/${id}`);
  }
}
