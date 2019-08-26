import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';

import {MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatSelectModule, MatTooltipModule} from '@angular/material';
import {ArticleComponent} from '../../Article/article.component';
import {NewestArticleComponent} from '../../newest-article/newest-article.component';
import {NewestArticleSideComponent} from '../../newest-article-side/newest-article-side.component';
import {HotNewsComponent} from '../../hot-news/hot-news.component';
import {HttpClientModule} from '@angular/common/http';
import {ChartLineComponent} from '../../chart-line/chart-line.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
  ],
  declarations: [
    HotNewsComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ArticleComponent,
    NewestArticleComponent,
    NewestArticleSideComponent,
    ChartLineComponent,
  ]
})

export class AdminLayoutModule {
}
