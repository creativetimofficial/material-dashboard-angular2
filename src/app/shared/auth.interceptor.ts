import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) {} // Injectez le service Router ici

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = localStorage.getItem('token');

        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${token}` // La pratique courante est de préfixer avec 'Bearer '
                }
            });
        }

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                console.log("error intercept",error);
                // Vous pourriez ici vérifier le statut de l'erreur pour voir si c'est une erreur 401 ou une autre
                if (error.status === 403) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    this.router.navigate(['/']);  // Rediriger vers la page d'accueil si le token n'est pas présent
                }

                // Passez l'erreur si vous ne la gérez pas ici
                return throwError(() => error);
            })
        );
    }
}
