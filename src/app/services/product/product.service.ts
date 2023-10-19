import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service
import { Product } from 'app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/product`; 
  
  constructor(private http: HttpClient) { }

  // Ajouter un produit
  createProduct(productData: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/add`, productData);
  }

  // Récupérer tous les produits
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer un produit spécifique
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/getOne/${id}`);
  }

  // Mettre à jour un produit
  updateProduct(id: string, updatedData: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}/update/${id}`, updatedData); 
  }

  // Supprimer un produit
  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/delete/${id}`); 
  }
}
