import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Field, Form, Section } from 'app/models/form.model';
import { ApiService } from 'app/services/api.service';
import { NotificationService } from 'app/services/notification.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  mode: 'create' | 'update' = 'create'; 
  fieldTypes = ['text', 'textarea', 'select'];
  form = this.newForm();

  constructor(private api: ApiService, private notifications: NotificationService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    if(this.route.snapshot.data) {
      
      this.form = this.convertToBuilderFormat(this.route.snapshot.data.form);
      this.mode = 'update';
      console.log('Form Data ', this.form);
    }
  }

  newForm() {
    return {
      id: null,
      name: '',
      description: '',
      sections: [
        this.getSectionTemplate()
      ]
    };
  }

  refreshPreview() {
    this.form = {...this.form};
  }

  addSection() {
    this.form.sections.push(this.getSectionTemplate());
  }

  removeSection(section) {
    this.form.sections = [...this.form.sections.filter(s => s._id !== section._id)];
  }

  addField(section, event) {
    console.log(section);
    section.fields.push(this.getFieldTemplate());
  }

  removeField(section, field) {
    section.fields = [...section.fields.filter(f => f._id !== field._id)];
  }

  getFieldTemplate() {
    return {
      _id: this.idGenerator(),
      name: '',
      type: '',
      options: []
    }
  }

  getSectionTemplate() {
    return {
      _id: this.idGenerator(),
      name: '',
      description: '',
      fields: [{
        _id: this.idGenerator(),
        name: '',
        type: '',
        options: [{value: ''}]
      }]
    }
  }

  addEmptyOption(field): void {
    field.options.push({value: ''});
  }

  idGenerator() {
    return uuidv4();
  }

  generateFormName(prefix, id) {
    if(!prefix) {
      throw Error("Prefix is required");
    }
    return `${prefix}_${id}`;
  }

  convertToBuilderFormat(form: Form) {
    var formBuilderFormat = this.newForm();
    formBuilderFormat.id = form.id;
    formBuilderFormat.name = form.name;
    formBuilderFormat.description = form.description;
    formBuilderFormat.sections = [
      ...this.convertSections(form.sections)
    ];
    return formBuilderFormat;
  }

  convertSections(formSections: Section[]): any[] {
    return formSections.map(_section => {
      return {
        _id: _section.id,
        name: _section.name,
        description: _section.description,
        fields: [...this.convertFields(_section.fields)]
      }
    })
  }

  convertFields(sectionFields: Field[]) {
    return sectionFields.map(_field => {
      return {
        _id: _field.id,
        name: _field.name,
        type: _field.type,
        options: _field.options,
        isRequired: _field.isRequired,
      }
    })
  }

  submit(): void {
    if(this.mode === 'create') {
      this.createForm();
    } else if(this.mode === 'update') {
      this.updateForm();
    }
  }

  createForm(): void {
    this.api.createForm(this.form)
    .subscribe(res => {
      this.notifications.success("Form created successfully");
      this.form = this.newForm();
    });
  }

  updateForm(): void {
    this.api.updateForm(this.form)
    .subscribe(res => {
      this.notifications.success("Form updated successfully");
      this.form = this.newForm();
    });
  }

}
