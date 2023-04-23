import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    username = "";
    password = "";
    errorMessage = "";
    constructor(
        private router: Router,
        private http: HttpClient,
        private socialService: SocialAuthService
    ) {}

    ngOnInit() {
        this.username = "";
        this.password = "";
        this.errorMessage = "";
        this.socialService.authState.subscribe({
            next: (value) => {
                console.log("Auth state changed", value);
            }
        })
    }

    login() {
        const data = {
            username: this.username,
            password: this.password
        }
        this.http.post(`${environment.apiUrl}/login`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        }).subscribe({
            next: (value: { access_token: string }) => {
                console.log("API Response", value);
                this.errorMessage = "";
                localStorage.setItem("token", value.access_token);
                return this.router.navigate([""])
            },
            error: error => {
                console.log("API Error", error);
                this.errorMessage = error.error;
            }
        })
    }

    isProduction() {
        return environment.production === true;
    }
}