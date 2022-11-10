import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PreviewComponent } from './post/preview/preview.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PostDetailComponent } from './typography/post-detail/post-detail.component';
import { ListPostComponent } from './typography/list-post/list-post.component';
import { CommonInterceptor } from './core/interceptor/common.interceptor';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PreviewComponent,
    PostDetailComponent,
    ListPostComponent
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:CommonInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
