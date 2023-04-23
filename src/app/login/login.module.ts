import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {loginRouting} from "./login.routing";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {
    SocialLoginModule,
    SocialAuthServiceConfig,
    GoogleLoginProvider,
} from "@abacritt/angularx-social-login";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(loginRouting),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        SocialLoginModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        {
            provide: "SocialAuthServiceConfig",
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider("720095072153-bl54auh9v367357cdfj7nti1eu2lvr05.apps.googleusercontent.com", {
                            scopes: "profile email"
                        })
                    }
                ],
                onError: (err) => {
                    console.error(err);
                }
            } as SocialAuthServiceConfig
        }
    ]
})
export class LoginModule {}