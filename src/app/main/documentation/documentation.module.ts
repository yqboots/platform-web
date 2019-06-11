import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';

const routes: Routes = [
  {
    path: 'changelog',
    loadChildren: () => import('@yq/docs').then(m => m.ChangelogModule)
  },
  {
    path: 'getting-started',
    loadChildren: () => import('@yq/docs').then(m => m.GettingStartedModule)
  },
  {
    path: 'developer-guide',
    loadChildren: () => import('@yq/docs').then(m => m.DeveloperGuideModule)
  },
  {
    path: 'components',
    loadChildren: () => import('@yq/docs').then(m => m.ComponentsModule)
  },
  {
    path: 'components-third-party',
    loadChildren: () => import('@yq/docs').then(m => m.ComponentsThirdPartyModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('@yq/docs').then(m => m.DirectivesModule)
  },
  {
    path: 'services',
    loadChildren: () => import('@yq/docs').then(m => m.ServicesModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),

    MatIconModule,

    YqSharedModule
  ]
})
export class DocumentationModule {
}
