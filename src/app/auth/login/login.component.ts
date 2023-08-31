import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: { email: string, password: string } = {
    email: '',
    password: ''
  };

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void { /* TODO document why this method 'ngOnInit' is empty */ }

  onSubmit() {
    this.apiService
      .login(this.credentials)
      .subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['/dashboard/dashboard'])
          .then((_naviResponse) => { console.log(_naviResponse); })
          .catch((e) => { console.error(e); });
        },
        error: (error) => console.log(error)
      });
  }

}
