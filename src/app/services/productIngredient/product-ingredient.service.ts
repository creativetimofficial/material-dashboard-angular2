import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service
import { ProductIngredient } from 'app/models/productIngredient.model';

@Injectable({
  providedIn: 'root'
})
export class ProductIngredientService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/productIngredient`; 
  
  constructor(private http: HttpClient) { }

  // Ajouter un ingrédient de produit
  createProductIngredient(productIngredientData: ProductIngredient): Observable<ProductIngredient> {
    return this.http.post<ProductIngredient>(`${this.baseUrl}/add`, productIngredientData);
  }

  // Récupérer tous les ingrédients de produits
  getAllProductIngredients(): Observable<ProductIngredient[]> {
    return this.http.get<ProductIngredient[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer un ingrédient de produit spécifique
  getProductIngredientById(id: string): Observable<ProductIngredient> {
    return this.http.get<ProductIngredient>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour un ingrédient de produit
  updateProductIngredient(id: string, updatedData: ProductIngredient): Observable<ProductIngredient> {
    return this.http.put<ProductIngredient>(`${this.baseUrl}/update/${id}`, updatedData); 
  }

  // Supprimer un ingrédient de produit
  deleteProductIngredient(id: string): Observable<ProductIngredient> {
    return this.http.delete<ProductIngredient>(`${this.baseUrl}/delete/${id}`); 
  }
}
