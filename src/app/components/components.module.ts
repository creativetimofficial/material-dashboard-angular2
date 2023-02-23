import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { AppartementComponent } from './appartement/appartement.component';
import { AvisComponent } from './avis/avis.component';
import { GarageComponent } from './garage/garage.component';
import { MaisonComponent } from './maison/maison.component';
import { OffreComponent } from './offre/offre.component';
import { QuestionComponent } from './question/question.component';
import { RoleComponent } from './role/role.component';
import { TerrainComponent } from './terrain/terrain.component';
import { VisiteComponent } from './visite/visite.component';
import { LoginComponent } from 'app/components/login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    UtilisateurComponent,
    AppartementComponent,
    AvisComponent,
    GarageComponent,
    MaisonComponent,
    OffreComponent,
    QuestionComponent,
    RoleComponent,
    TerrainComponent,
    VisiteComponent,
    LoginComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
