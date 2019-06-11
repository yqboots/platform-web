import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';

import {YqSharedModule} from '@yq/core';

import {LockComponent} from './lock.component';

const routes = [
  {
    path: 'auth/lock',
    component: LockComponent
  }
];

@NgModule({
  declarations: [
    LockComponent
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
export class LockModule {
}
