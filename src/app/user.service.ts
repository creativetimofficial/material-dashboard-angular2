import {Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

@Injectable({
    providedIn: "root"
})
export class UserService {
    constructor(private cookieService: CookieService) {}

    getAppJwtToken(): string | null {
        return this.cookieService.get("APP_CREDENTIAL");
    }
}