import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AvisService } from './services/avis.service';
import { AppartementService } from './services/appartement.service';
import { QuestionService } from './services/question.service';
import { OffreService } from './services/offre.service';
import { RoleService } from './services/role.service';
import { UtilisateurService } from './services/utilisateur.service';
import { MaisonService } from './services/maison.service';
import { GarageService } from './services/garage.service';
import { TerrainService } from './services/terrain.service';
import { VisiteService } from './services/visite.service';
import { AppService } from './app.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MdpComponent } from './mdp/mdp.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    MatMenuModule,
    MatIconModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MdpComponent,

  ],
  providers: [AvisService, AppartementService, QuestionService, OffreService, RoleService, UtilisateurService, MaisonService, GarageService, TerrainService, VisiteService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
