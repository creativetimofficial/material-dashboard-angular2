import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardTabCardComponent, DashboardCardTab, DashboardTabCardHeader, DashboardCardTabLabel } from './dashboard-tab-card/dashboard-tab-card.component';
import { PortalModule } from '@angular/cdk/portal';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PortalModule,
    MatButtonModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardTabCardComponent, DashboardCardTab, DashboardTabCardHeader, DashboardCardTabLabel,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardTabCardComponent, DashboardCardTab, DashboardTabCardHeader, DashboardCardTabLabel,
  ]
})
export class ComponentsModule { }
