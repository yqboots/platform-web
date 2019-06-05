import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {YqNavigationModule} from '@yq/components';
import {YqSharedModule} from '@yq/core';

import {NavbarVerticalStyle2Component} from 'app/layout/components/navbar/vertical/style-2/style-2.component';

@NgModule({
  declarations: [
    NavbarVerticalStyle2Component
  ],
  imports: [
    MatButtonModule,
    MatIconModule,

    YqSharedModule,
    YqNavigationModule
  ],
  exports: [
    NavbarVerticalStyle2Component
  ]
})
export class NavbarVerticalStyle2Module {
}
