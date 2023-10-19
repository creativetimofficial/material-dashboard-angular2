import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // Ajustez le chemin selon l'emplacement de votre service
import { Order } from 'app/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // URL de base pour accéder au backend. Ajustez-le en fonction de votre configuration.
  private readonly baseUrl: string = `${environment.backendUrl}/order`;

  constructor(private http: HttpClient) { }

  // Ajouter une commande
  createOrder(orderData: Order): Observable<Order> {
    return this.http.post<Order>(`${this.baseUrl}/add`, orderData);
  }

  // Récupérer toutes les commandes
  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/getAll`);
  }

  // Récupérer une commande spécifique
  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/getOne/${id}`);
  }

  // Récupérer toutes les commandes
  getAllOrdersByRestaurant(uidPro: string): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}/getAllByRestaurant/${uidPro}`);
  }

  // Mettre à jour une commande
  updateOrder(id: string, updatedData: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}/update/${id}`, updatedData); // Ici, j'ai utilisé PUT pour la mise à jour, ce qui est plus approprié.
  }

  // Supprimer une commande
  deleteOrder(id: string): Observable<Order> {
    return this.http.delete<Order>(`${this.baseUrl}/delete/${id}`); // J'ai également utilisé DELETE pour la suppression, ce qui est la méthode HTTP appropriée.
  }
}
