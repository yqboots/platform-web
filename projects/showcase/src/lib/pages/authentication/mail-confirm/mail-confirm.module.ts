import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';

import {MailConfirmComponent} from './mail-confirm.component';

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
