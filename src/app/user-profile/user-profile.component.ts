import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      userName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      address: ["", [Validators.required, Validators.maxLength(1000)]],
      city: ["", Validators.required],
      country: ["", Validators.required],
      postalCode: ["", Validators.required],
      aboutMe: ["", Validators.required],
    });
  }

  get h() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    console.table(this.registerForm.value);
    console.table(this.registerForm);

    alert("Profile Updated\n" + JSON.stringify(this.registerForm.value));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
