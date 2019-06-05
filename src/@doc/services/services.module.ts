import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';
import {YqHighlightModule} from '@yq/components';

import {YqConfigServiceDocsComponent} from '@doc/services/yq-config/yq-config.component';
import {YqSplashScreenServiceDocsComponent} from '@doc/services/yq-splash-screen/yq-splash-screen.component';

const routes = [
  {
    path: 'yq-config',
    component: YqConfigServiceDocsComponent
  },
  {
    path: 'yq-splash-screen',
    component: YqSplashScreenServiceDocsComponent
  }
];

@NgModule({
  declarations: [
    YqConfigServiceDocsComponent,
    YqSplashScreenServiceDocsComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatIconModule,

    YqSharedModule,
    YqHighlightModule
  ]
})

export class ServicesModule {
}
