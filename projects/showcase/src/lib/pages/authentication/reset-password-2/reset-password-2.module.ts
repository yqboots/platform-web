import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {YqSharedModule} from '@yq/core';

import {ResetPassword2Component} from './reset-password-2.component';

const routes = [
  {
    path: 'auth/reset-password-2',
    component: ResetPassword2Component
  }
];

@NgModule({
  declarations: [
    ResetPassword2Component
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
export class ResetPassword2Module {
}
