import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token'); // Récupérez le token JWT de votre source de données, par exemple, localStorage

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${token}` // Ajoutez le token dans l'en-tête de la requête
                }
            });
        }

        return next.handle(request);
    }
}
