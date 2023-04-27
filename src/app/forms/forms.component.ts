import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ApiService } from 'app/services/api.service';
import { NotificationService } from 'app/services/notification.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  forms: Form[] = [];
  constructor(private api: ApiService, private ns: NotificationService) { }

  ngOnInit(): void {
    this.getForms();
  }

  getForms() {
    this.api.listForms()
    .subscribe((forms: any) => {
      this.forms = forms;
      console.log(this.forms);
    });
  }

  deleteForm(id: string) {
    if (!confirm('Are you sure you want to delete this form?')) {
      return;
    }
    this.api.deleteForm(id)
    .subscribe((res: any) => {
      this.ns.success('Form deleted successfully');
      this.getForms();
    });
  }

}
