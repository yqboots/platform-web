import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {ChartsModule} from 'ng2-charts';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';
import {YqWidgetModule} from '@yq/components';

import {AnalyticsDashboardComponent} from '@yq/extensions/analytics/analytics.component';
import {AnalyticsDashboardService} from '@yq/extensions/analytics/analytics.service';
import {AnalyticsFakeDbService} from './analytics-fake-db.service';

import {environment} from 'environments/environment';

const routes: Routes = [
  {
    path: '**',
    component: AnalyticsDashboardComponent,
    resolve: {
      data: AnalyticsDashboardService
    }
  }
];

@NgModule({
  declarations: [
    AnalyticsDashboardComponent
  ],
  imports: [
    HttpClientModule,

    RouterModule.forChild(routes),

    !environment.production ? InMemoryWebApiModule.forFeature(AnalyticsFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }) : [],

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,

    ChartsModule,
    NgxChartsModule,

    YqSharedModule,
    YqWidgetModule
  ],
  providers: [
    AnalyticsDashboardService
  ]
})
export class AnalyticsDashboardModule {
}

