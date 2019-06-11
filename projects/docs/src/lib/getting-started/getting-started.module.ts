import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';
import {YqHighlightModule} from '@yq/components';

import {DocsGettingStartedIntroductionComponent} from './introduction/introduction.component';
import {DocsGettingStartedInstallationComponent} from './installation/installation.component';

const routes = [
  {
    path: 'introduction',
    component: DocsGettingStartedIntroductionComponent
  },
  {
    path: 'installation',
    component: DocsGettingStartedInstallationComponent
  }
];

@NgModule({
  declarations: [
    DocsGettingStartedIntroductionComponent,
    DocsGettingStartedInstallationComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatIconModule,

    YqSharedModule,
    YqHighlightModule
  ]
})
export class GettingStartedModule {
}
