import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {YqSharedModule} from '@yq/core';

const routes = [
  {
    path: 'analytics',
    loadChildren: () => import('@yq/extensions').then(m => m.AnalyticsDashboardModule)
  },
  {
    path: 'project',
    loadChildren: () => import('@yq/extensions').then(m => m.ProjectDashboardModule)
  },
  {
    path: 'mail',
    loadChildren: () => import('@yq/extensions').then(m => m.MailModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('@yq/extensions').then(m => m.ChatModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('@yq/extensions').then(m => m.CalendarModule)
  },
  {
    path: 'e-commerce',
    loadChildren: () => import('@yq/extensions').then(m => m.EcommerceModule)
  },
  {
    path: 'academy',
    loadChildren: () => import('@yq/extensions').then(m => m.AcademyModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('@yq/extensions').then(m => m.TodoModule)
  },
  {
    path: 'file-manager',
    loadChildren: () => import('@yq/extensions').then(m => m.FileManagerModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('@yq/extensions').then(m => m.ContactsModule)
  },
  {
    path: 'scrumboard',
    loadChildren: () => import('@yq/extensions').then(m => m.ScrumboardModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    YqSharedModule
  ]
})
export class ExtensionsModule {
}
