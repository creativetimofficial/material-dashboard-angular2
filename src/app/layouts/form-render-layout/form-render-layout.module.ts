import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormRenderLayoutRouting } from './form-render-routing-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPresenterComponent } from 'app/components/form-presenter/form-presenter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ComponentsModule } from 'app/components/components.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    RouterModule.forChild(FormRenderLayoutRouting),
    ComponentsModule
  ],
})
export class FormRenderLayoutModule { }
