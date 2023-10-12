import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/ingredient`;

  constructor(private http: HttpClient) { }

  // Ajouter un ingrédient
  createIngredient(ingredientData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, ingredientData);
  }

  // Récupérer tous les ingrédients
  getAllIngredients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer un ingrédient spécifique
  getIngredientById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour un ingrédient
  updateIngredient(id: string, updatedData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/update/${id}`, updatedData); // Note: Ici, il est préférable d'utiliser POST ou PUT pour les mises à jour, mais vous aviez utilisé GET dans votre exemple pour Category.
  }

  // Supprimer un ingrédient
  deleteIngredient(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/delete/${id}`); // Note: Pour une suppression, il est généralement préférable d'utiliser DELETE comme méthode HTTP.
  }
}
