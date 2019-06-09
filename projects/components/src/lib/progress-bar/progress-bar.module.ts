import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import {YqProgressBarComponent} from './progress-bar.component';

@NgModule({
  declarations: [
    YqProgressBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatIconModule,
    MatProgressBarModule
  ],
  exports: [
    YqProgressBarComponent
  ]
})
export class YqProgressBarModule {
}
