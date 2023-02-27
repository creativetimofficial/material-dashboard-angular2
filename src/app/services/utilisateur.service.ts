import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";




@Injectable({
  providedIn: 'root'
})
/*export class UtilisateurService {

  private BASE_URL = "http://localhost:8080/utilisateurs"

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> { return this.httpClient.get(this.BASE_URL); }

  public save(utilisateur: any): Observable<any> { return this.httpClient.post(this.BASE_URL, utilisateur); }

  public delete(id: number): Observable<any> { return this.httpClient.delete(this.BASE_URL + "/" + id); }

  public findOne(id: number): Observable<any> { return this.httpClient.get(this.BASE_URL + "/" + id); }

  public findOneUsername(username: string): Observable<any> { return this.httpClient.get(this.BASE_URL + "/" + username); }

  public update(utilisateur: any): Observable<any> {
    var utilisateurJSON = JSON.parse(utilisateur);
    return this.httpClient.put(this.BASE_URL + "/" + utilisateurJSON.idUtilisateur, utilisateurJSON);
  }*/

export class UtilisateurService {
  private BASE_URL = "http://localhost:8080/utilisateurs";
  // HttpClient = module qui nous permet d'utiliser les verbes http : GET POST PUT DELETE  
  constructor(private httpClient: HttpClient) { }
  // findAll --> verbe http GET --> URL : BASE_URL  
  // Observable --> une méthode qui vérifie  les données dans le serveur nodejs
  // Afficher la liste des utilisateurs
  public findAll(): Observable<any> {
    return this.httpClient.get(this.BASE_URL);
  }
  // save --> verbe http POST --> URL : BASE_URL + Body  
  public save(utilisateur: any): Observable<any> {
    return this.httpClient.post(this.BASE_URL, utilisateur);
  }
  // delete --> verbe http DELETE --> URL : BASE_URL/id  
  public delete(id: number): Observable<any> {
    return this.httpClient.delete(this.BASE_URL + "/" + id);
    // Pour id = 1 --> http://localhost:8080/utilisateurs/1    
  }
  // get with id --> verbe http : GET : URL : BASE_URL/id  
  public findOne(id: number): Observable<any> {
    return this.httpClient.get(this.BASE_URL + '/' + id);
  }
  // put --> verbe http : PUT --> URL : BASE_URL/id et dans le body l'objet utilisateur 
  public update(utilisateur: any): Observable<any> {
    //var utilisateurJSON = JSON.parse(utilisateur); // conversion de string vers format JSON 
    // return this.httpClient.put(this.BASE_URL + "/" + utilisateurJSON.idUtilisateur, utilisateurJSON);
    return this.httpClient.put(this.BASE_URL + "/" + utilisateur.idUtilisateur, utilisateur);
  }

}
