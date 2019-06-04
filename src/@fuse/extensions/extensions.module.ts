import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/core';

const routes = [
    {
        path: 'dashboards/analytics',
        loadChildren: () => import('@fuse/extensions/dashboards/analytics/analytics.module').then(m => m.AnalyticsDashboardModule)
    },
    {
        path: 'dashboards/project',
        loadChildren: () => import('@fuse/extensions/dashboards/project/project.module').then(m => m.ProjectDashboardModule)
    },
    {
        path: 'mail',
        loadChildren: () => import('@fuse/extensions/mail/mail.module').then(m => m.MailModule)
    },
    {
        path: 'mail-ngrx',
        loadChildren: () => import('@fuse/extensions/mail-ngrx/mail.module').then(m => m.MailNgrxModule)
    },
    {
        path: 'chat',
        loadChildren: () => import('@fuse/extensions/chat/chat.module').then(m => m.ChatModule)
    },
    {
        path: 'calendar',
        loadChildren: () => import('@fuse/extensions/calendar/calendar.module').then(m => m.CalendarModule)
    },
    {
        path: 'e-commerce',
        loadChildren: () => import('@fuse/extensions/e-commerce/e-commerce.module').then(m => m.EcommerceModule)
    },
    {
        path: 'academy',
        loadChildren: () => import('@fuse/extensions/academy/academy.module').then(m => m.AcademyModule)
    },
    {
        path: 'todo',
        loadChildren: () => import('@fuse/extensions/todo/todo.module').then(m => m.TodoModule)
    },
    {
        path: 'file-manager',
        loadChildren: () => import('@fuse/extensions/file-manager/file-manager.module').then(m => m.FileManagerModule)
    },
    {
        path: 'contacts',
        loadChildren: () => import('@fuse/extensions/contacts/contacts.module').then(m => m.ContactsModule)
    },
    {
        path: 'scrumboard',
        loadChildren: () => import('@fuse/extensions/scrumboard/scrumboard.module').then(m => m.ScrumboardModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        FuseSharedModule
    ]
})
export class ExtensionsModule {
}
