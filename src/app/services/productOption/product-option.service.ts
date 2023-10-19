import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service
import { ProductOption } from 'app/models/productOption.model';

@Injectable({
  providedIn: 'root'
})
export class ProductOptionService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/productOption`; 
  
  constructor(private http: HttpClient) { }

  // Ajouter une option de produit
  createProductOption(productOptionData: ProductOption): Observable<ProductOption> {
    return this.http.post<ProductOption>(`${this.baseUrl}/add`, productOptionData);
  }

  // Récupérer toutes les options de produits
  getAllProductOptions(): Observable<ProductOption[]> {
    return this.http.get<ProductOption[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer une option de produit spécifique
  getProductOptionById(id: string): Observable<ProductOption> {
    return this.http.get<ProductOption>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour une option de produit
  updateProductOption(id: string, updatedData: ProductOption): Observable<ProductOption> {
    return this.http.put<ProductOption>(`${this.baseUrl}/update/${id}`, updatedData); 
  }

  // Supprimer une option de produit
  deleteProductOption(id: string): Observable<ProductOption> {
    return this.http.delete<ProductOption>(`${this.baseUrl}/delete/${id}`); 
  }
}
