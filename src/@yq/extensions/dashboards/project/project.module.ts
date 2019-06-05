import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {YqSharedModule} from '@yq/core';
import {YqSidebarModule, YqWidgetModule} from '@yq/components';

import {ProjectDashboardComponent} from '@yq/extensions/dashboards/project/project.component';
import {ProjectDashboardService} from '@yq/extensions/dashboards/project/project.service';

const routes: Routes = [
    {
        path: '**',
        component: ProjectDashboardComponent,
        resolve: {
            data: ProjectDashboardService
        }
    }
];

@NgModule({
    declarations: [
        ProjectDashboardComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,

        NgxChartsModule,

        YqSharedModule,
        YqSidebarModule,
        YqWidgetModule
    ],
    providers: [
        ProjectDashboardService
    ]
})
export class ProjectDashboardModule {
}

