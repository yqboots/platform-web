import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';

import {MailConfirmComponent} from '@showcase/pages/authentication/mail-confirm/mail-confirm.component';

const routes = [
    {
        path: 'auth/mail-confirm',
        component: MailConfirmComponent
    }
];

@NgModule({
    declarations: [
        MailConfirmComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatIconModule,

        YqSharedModule
    ]
})
export class MailConfirmModule {
}
