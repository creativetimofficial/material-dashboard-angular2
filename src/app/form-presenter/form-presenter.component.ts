import { Component, OnInit } from '@angular/core';
import { FormResponse } from 'app/models/form-response.model';
import { Form } from 'app/models/form.model';
import { ApiService } from 'app/services/api.service';
import { NotificationService } from 'app/services/notification.service';
import { catchError, of, tap } from 'rxjs';

@Component({
  selector: 'app-form-presenter',
  templateUrl: './form-presenter.component.html',
  styleUrls: ['./form-presenter.component.css']
})
export class FormPresenterComponent implements OnInit {
  formId = '6438ffe42460fa0b4f5fe3fe';
  formConfig: Form = null;

  constructor(private api: ApiService, private ns: NotificationService) { }

  ngOnInit(): void {
    this.getForm();
  }

  getForm(): void {
    this.api.getForm(this.formId)
      .pipe(
        tap((form) => console.log(form)),
        catchError((err, caught) => { console.error(err); return of(null); })
      )
      .subscribe(form => {
        if (form) {
          this.render(form);
        }
      });
  }

  render(formConfig: Form) {
    formConfig.sections.forEach(section => {
      section.fields.forEach(field => {
        field.value = null;
      });
    });
    this.formConfig = formConfig;
  }

  submit() {    
    let sections = {};
    this.formConfig.sections.forEach(section => {
      let fields = {};
      section.fields.forEach(field => {
        switch(field.type.toLocaleLowerCase()) {
          case 'select':
            if(!(field.value instanceof Array)) {
              field.value = [];
            }
            fields[field.id] = field.value;
          default:
            fields[field.id] = [field.value];
        }
      });
      sections[section.id] = { fields: fields };
    });
    let formResponse: FormResponse = {
      formId: this.formConfig.id,
      sections: sections
    };    
    this.api.submit(formResponse).subscribe(() => this.ns.success('Form submitted successfully'));
  }
}
