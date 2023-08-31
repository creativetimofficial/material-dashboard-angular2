import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Form } from 'app/models/form.model';
import { ApiService } from 'app/services/api.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormResolverResolver implements Resolve<Form> {
  constructor(private api: ApiService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Form> {
    let formId = route.paramMap.get('id');
    return this.api.getForm(formId);
  }
}
