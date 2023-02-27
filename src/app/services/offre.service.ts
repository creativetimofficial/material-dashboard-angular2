import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from 'app/model/offre';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private BASE_URL = "http://localhost:8080/offres"

  constructor(private httpClient: HttpClient) { }

  public findAll(): Observable<any> { return this.httpClient.get(this.BASE_URL); }

  public save(image: File, offre: Offre): Observable<Object> {
    const formData = new FormData();
    formData.append('adresseFront', offre.adresseOffre);
    formData.append('villeFront', offre.ville);
    formData.append('prixFront', offre.prixOffre.toString());
    formData.append('surfaceFront', offre.surfaceOffre.toString());
    formData.append('descriptionFront', offre.description);
    formData.append('imageFront', image);
    formData.append('disponibiliteFront', offre.disponibiliteOffre.toString());
    formData.append('orientationFront', offre.orientationOffre);
    formData.append('etatFront', offre.etatOffre.toString());
    formData.append('typeFront', offre.typeOffre);
    const requestHttp = new HttpRequest('POST', this.BASE_URL, formData, {
      reportProgress: true, responseType: 'json'
    });
    return this.httpClient.request(requestHttp).pipe(
      catchError((error) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  public rechercher(ville:string) : Observable<any>{
      return this.httpClient.get(this.BASE_URL+"/"+ville);
  }

  

  public delete(id: number): Observable<any> { return this.httpClient.delete(this.BASE_URL + "/" + id); }

  public findOne(id: number): Observable<any> { return this.httpClient.get(this.BASE_URL + "/" + id); }

  public update(offre: any): Observable<any> {
    var offreJSON = JSON.parse(offre);
    return this.httpClient.put(this.BASE_URL + "/" + offreJSON.idoffre, offreJSON);
  }
}
