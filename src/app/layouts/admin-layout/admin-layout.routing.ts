import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { FormsComponent } from 'app/forms/forms.component';
import { FormBuilderComponent } from 'app/forms/form-builder/form-builder.component';
import { FormResolverResolver } from 'app/resolvers/form-resolver.resolver';

export const AdminLayoutRoutes: Routes = [

    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'forms', children: [
        { path: '', pathMatch: 'full',  component: FormsComponent },
        { path: 'new', component: FormBuilderComponent},
        { path: 'view/:id', resolve: {form: FormResolverResolver}, component: FormBuilderComponent},
        { path: 'edit/:id', resolve: {form: FormResolverResolver}, component: FormBuilderComponent},
    ] },
];
