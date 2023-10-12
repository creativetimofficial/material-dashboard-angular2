import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/category`;

  constructor(private http: HttpClient) { }

  // Ajouter une catégorie
  createCategory(categoryData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, categoryData);
  }

  // Récupérer toutes les catégories
  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer une catégorie spécifique
  getCategoryById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour une catégorie
  updateCategory(id: string, updatedData: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/update/${id}`, updatedData);
  }

  // Supprimer une catégorie
  deleteCategory(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/delete/${id}`);
  }
}
