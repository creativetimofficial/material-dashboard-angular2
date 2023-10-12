import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service

@Injectable({
  providedIn: 'root'
})
export class ProductOptionService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/productOption`; 
  
  constructor(private http: HttpClient) { }

  // Ajouter une option de produit
  createProductOption(productOptionData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, productOptionData);
  }

  // Récupérer toutes les options de produits
  getAllProductOptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer une option de produit spécifique
  getProductOptionById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour une option de produit
  updateProductOption(id: string, updatedData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/update/${id}`, updatedData); 
  }

  // Supprimer une option de produit
  deleteProductOption(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/delete/${id}`); 
  }
}
