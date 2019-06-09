import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {ChartsModule} from 'ng2-charts';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {YqSharedModule} from '@yq/core';
import {YqWidgetModule} from '@yq/components';

import {AnalyticsDashboardComponent} from '@yq/extensions/dashboards/analytics/analytics.component';
import {AnalyticsDashboardService} from '@yq/extensions/dashboards/analytics/analytics.service';

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
    RouterModule.forChild(routes),

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

