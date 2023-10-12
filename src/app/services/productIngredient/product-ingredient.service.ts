import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service

@Injectable({
  providedIn: 'root'
})
export class ProductIngredientService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/productIngredient`; 
  
  constructor(private http: HttpClient) { }

  // Ajouter un ingrédient de produit
  createProductIngredient(productIngredientData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, productIngredientData);
  }

  // Récupérer tous les ingrédients de produits
  getAllProductIngredients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer un ingrédient de produit spécifique
  getProductIngredientById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour un ingrédient de produit
  updateProductIngredient(id: string, updatedData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/update/${id}`, updatedData); 
  }

  // Supprimer un ingrédient de produit
  deleteProductIngredient(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/delete/${id}`); 
  }
}
