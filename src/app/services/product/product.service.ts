import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/product`; 
  
  constructor(private http: HttpClient) { }

  // Ajouter un produit
  createProduct(productData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, productData);
  }

  // Récupérer tous les produits
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer un produit spécifique
  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour un produit
  updateProduct(id: string, updatedData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/update/${id}`, updatedData); 
  }

  // Supprimer un produit
  deleteProduct(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/delete/${id}`); 
  }
}
