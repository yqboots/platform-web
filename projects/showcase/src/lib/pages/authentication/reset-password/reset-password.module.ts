import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {YqSharedModule} from '@yq/core';

import {ResetPasswordComponent} from './reset-password.component';

const routes = [
  {
    path: 'auth/reset-password',
    component: ResetPasswordComponent
  }
];

@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

    YqSharedModule
  ]
})
export class ResetPasswordModule {
}
