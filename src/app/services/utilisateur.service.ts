import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from 'app/model/utilisateur';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private BASE_URL = "http://localhost:8080/utilisateurs"

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> { return this.httpClient.get(this.BASE_URL); }

  public save(image: File, utilisateur: Utilisateur): Observable<any> {
    const formData = new FormData(); //permet d'utiliser le resquestParam de la méthode save de la partie back
    formData.append('nomFront', utilisateur.nomUtilisateur);
    formData.append('prenomFront', utilisateur.prenomUtilisateur);
    formData.append('usernameFront', utilisateur.username);
    formData.append('passwordFront', utilisateur.password);
    formData.append('imageFront', image);
    const requestHttp = new HttpRequest('POST', this.BASE_URL, formData, {
      reportProgress: true, responseType: 'text'
    })
    return this.httpClient.request(requestHttp);
  }

  public delete(id: number): Observable<any> { return this.httpClient.delete(this.BASE_URL + "/" + id); }

  public findOne(id: number): Observable<any> { return this.httpClient.get(this.BASE_URL + "/" + id); }

  public findOneUsername(username: string): Observable<any> { return this.httpClient.get(this.BASE_URL + "/" + username); }

  public update(utilisateur: any): Observable<any> {
    var utilisateurJSON = JSON.parse(utilisateur);
    return this.httpClient.put(this.BASE_URL + "/" + utilisateurJSON.idUtilisateur, utilisateurJSON);
  }
}
