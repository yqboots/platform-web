import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';
import {YqHighlightModule} from '@yq/components';

import {DocsWorkingWithYqServerComponent} from './server/server.component';
import {DocsWorkingWithYqProductionComponent} from './production/production.component';
import {DocsWorkingWithYqDirectoryStructureComponent} from './directory-structure/directory-structure.component';
import {DocsWorkingWithYqUpdatingYqComponent} from './updating-yq/updating-yq.component';
import {DocsWorkingWithYqMultiLanguageComponent} from './multi-language/multi-language.component';
import {DocsWorkingWithYqMaterialThemingComponent} from './material-theming/material-theming.component';
import {DocsWorkingWithYqThemeLayoutsComponent} from './theme-layouts/theme-layouts.component';
import {DocsWorkingWithYqPageLayoutsComponent} from './page-layouts/page-layouts.component';

const routes = [
  {
    path: 'server',
    component: DocsWorkingWithYqServerComponent
  },
  {
    path: 'production',
    component: DocsWorkingWithYqProductionComponent
  },
  {
    path: 'directory-structure',
    component: DocsWorkingWithYqDirectoryStructureComponent
  },
  {
    path: 'updating-yq',
    component: DocsWorkingWithYqUpdatingYqComponent
  },
  {
    path: 'multi-language',
    component: DocsWorkingWithYqMultiLanguageComponent
  },
  {
    path: 'material-theming',
    component: DocsWorkingWithYqMaterialThemingComponent
  },
  {
    path: 'theme-layouts',
    component: DocsWorkingWithYqThemeLayoutsComponent
  },
  {
    path: 'page-layouts',
    component: DocsWorkingWithYqPageLayoutsComponent
  }
];

@NgModule({
  declarations: [
    DocsWorkingWithYqServerComponent,
    DocsWorkingWithYqProductionComponent,
    DocsWorkingWithYqDirectoryStructureComponent,
    DocsWorkingWithYqUpdatingYqComponent,
    DocsWorkingWithYqMaterialThemingComponent,
    DocsWorkingWithYqMultiLanguageComponent,
    DocsWorkingWithYqThemeLayoutsComponent,
    DocsWorkingWithYqPageLayoutsComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatIconModule,

    YqSharedModule,
    YqHighlightModule
  ]
})
export class DeveloperGuideModule {
}
