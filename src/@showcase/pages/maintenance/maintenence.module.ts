import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {YqSharedModule} from '@yq/core';

import {MaintenanceComponent} from '@showcase/pages/maintenance/maintenance.component';

const routes = [
  {
    path: 'maintenance',
    component: MaintenanceComponent
  }
];

@NgModule({
  declarations: [
    MaintenanceComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    YqSharedModule
  ]
})
export class MaintenanceModule {
}
