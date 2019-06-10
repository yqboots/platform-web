import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {YqSharedModule} from '@yq/core';

const routes = [
  {
    path: 'analytics',
    loadChildren: () => import('@yq/extensions/analytics/analytics.module').then(m => m.AnalyticsDashboardModule)
  },
  {
    path: 'project',
    loadChildren: () => import('@yq/extensions/project/project.module').then(m => m.ProjectDashboardModule)
  },
  {
    path: 'mail',
    loadChildren: () => import('@yq/extensions/mail/mail.module').then(m => m.MailModule)
  },
  {
    path: 'mail-ngrx',
    loadChildren: () => import('@yq/extensions/mail-ngrx/mail.module').then(m => m.MailNgrxModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('@yq/extensions/chat/chat.module').then(m => m.ChatModule)
  },
  {
    path: 'calendar',
    loadChildren: () => import('@yq/extensions/calendar/calendar.module').then(m => m.CalendarModule)
  },
  {
    path: 'e-commerce',
    loadChildren: () => import('@yq/extensions/e-commerce/e-commerce.module').then(m => m.EcommerceModule)
  },
  {
    path: 'academy',
    loadChildren: () => import('@yq/extensions/academy/academy.module').then(m => m.AcademyModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('@yq/extensions/todo/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'file-manager',
    loadChildren: () => import('@yq/extensions/file-manager/file-manager.module').then(m => m.FileManagerModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('@yq/extensions/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'scrumboard',
    loadChildren: () => import('@yq/extensions/scrumboard/scrumboard.module').then(m => m.ScrumboardModule)
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
