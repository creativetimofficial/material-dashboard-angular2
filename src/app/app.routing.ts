import { Component, NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AppartementComponent } from './components/appartement/appartement.component';
import { AvisComponent } from './components/avis/avis.component';
import { GarageComponent } from './components/garage/garage.component';
import { MaisonComponent } from './components/maison/maison.component';
import { OffreComponent } from './components/offre/offre.component';
import { QuestionComponent } from './components/question/question.component';
import { RoleComponent } from './components/role/role.component';
import { TerrainComponent } from './components/terrain/terrain.component';
import { UtilisateurComponent } from './components/utilisateur/utilisateur.component';
import { VisiteComponent } from './components/visite/visite.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }, {
    path: 'appartements',
    component: AppartementComponent
  }, {
    path: 'avis',
    component: AvisComponent
  }, {
    path: 'garages',
    component: GarageComponent
  }, {
    path: 'maisons',
    component: MaisonComponent
  }, {
    path: 'offres',
    component: OffreComponent
  }, {
    path: 'questions',
    component: QuestionComponent
  }, {
    path: 'roles',
    component: RoleComponent
  }, {
    path: 'terrains',
    component: TerrainComponent
  }, {
    path: 'utilisateurs',
    component: UtilisateurComponent
  }, {
    path: 'visites',
    component: VisiteComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
