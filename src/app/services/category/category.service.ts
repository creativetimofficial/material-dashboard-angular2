import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service
import { Category } from 'app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/category`;

  constructor(private http: HttpClient) { }

  // Ajouter une catégorie
  createCategory(categoryData: Category): Observable<Category> {
    console.log(categoryData);
    return this.http.post<Category>(`${this.baseUrl}/add`, categoryData);
  }

  // Récupérer toutes les catégories
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer une catégorie spécifique
  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour une catégorie
  updateCategory(id: string, updatedData: Category): Observable<Category> {
    return this.http.put<Category>(`${this.baseUrl}/update/${id}`, updatedData);
  }

  // Supprimer une catégorie
  deleteCategory(id: string): Observable<Category> {
    return this.http.delete<Category>(`${this.baseUrl}/delete/${id}`);
  }
}
