import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
export class FormPresenterComponent implements OnInit, OnChanges {
  @Input() screenCover: 'full' | 'narrow' = 'full';
  @Input() previewFormConfig: Form = null;
  @Output() previewFormConfigEvent(): Form {
    return this.previewFormConfig;
  }

  formId = '64ee64b6df7cf221a673751d';
  formConfig: Form = null;

  constructor(private api: ApiService, private ns: NotificationService) { }

  ngOnInit(): void {
    if (this.previewFormConfig) {
      this.render(this.previewFormConfig);
    } else {
      this.getForm();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changed -> ', changes);
    if (changes.previewFormConfig.currentValue) {
      console.log('changed 2-> ', changes);
      this.render(changes.previewFormConfig.currentValue);
    }
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
    if (this.previewFormConfig) {
      formConfig.sections = formConfig
        .sections
        .map(s => { s.id = s['_id']; return s; })
        .map(s => {
          s.fields = s.fields.map(f => {
            f.id = f['_id'];
            return f;
          });
          return s;
        });
    }
    formConfig.sections.forEach(section => {
      section.fields.forEach(field => {
        field.value = null;
      });
    });
    this.formConfig = { ...formConfig };
  }

  submit() {
    let sections = {};
    this.formConfig.sections.forEach(section => {
      let fields = {};
      section.fields.forEach(field => {
        switch (field.type.toLocaleLowerCase()) {
          case 'select':
            if (!(field.value instanceof Array)) {
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


  generateFormName(prefix, id) {
    if (!prefix) {
      throw Error("Prefix is required");
    }
    return `${prefix}_${id}`;
  }
}
