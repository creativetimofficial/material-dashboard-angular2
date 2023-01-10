import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import  { dashboardReducer } from "./store/dashboard/dashboard.reducer";

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        StoreModule.forRoot({ dashboard: dashboardReducer }),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            autoPause: true
        })
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
