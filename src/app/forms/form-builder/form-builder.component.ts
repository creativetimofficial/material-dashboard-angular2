import { Component, OnInit } from '@angular/core';
import { Form } from 'app/models/form.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  fieldTypes = ['text', 'textarea', 'radio', 'checkbox', 'select', 'date', 'file'];
  form = {
    name: '',
    description: '',
    sections: [
      this.getSectionTemplate()
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

  refreshPreview() {
    this.form = {...this.form};
  }

  addSection() {
    this.form.sections.push(this.getSectionTemplate());
  }

  removeSection(section) {
    this.form.sections = [...this.form.sections.filter(s => s._id !== section.index)];
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
      title: '',
      description: '',
      fields: [{
        _id: this.idGenerator(),
        name: '',
        type: '',
        options: []
      }]
    }
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

}
