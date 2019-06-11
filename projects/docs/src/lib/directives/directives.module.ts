import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';
import {YqHighlightModule} from '@yq/components';

import {DocsDirectivesIfOnDomComponent} from './ifOnDom/if-on-dom.component';
import {DocsDirectivesInnerScrollComponent} from './innerScroll/inner-scroll.component';
import {DocsDirectivesMatSidenavComponent} from './matSidenav/mat-sidenav.component';

const routes = [
  {
    path: 'if-on-dom',
    component: DocsDirectivesIfOnDomComponent
  },
  {
    path: 'inner-scroll',
    component: DocsDirectivesInnerScrollComponent
  },
  {
    path: 'mat-sidenav',
    component: DocsDirectivesMatSidenavComponent
  }
];

@NgModule({
  declarations: [
    DocsDirectivesIfOnDomComponent,
    DocsDirectivesInnerScrollComponent,
    DocsDirectivesMatSidenavComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatIconModule,

    YqSharedModule,
    YqHighlightModule
  ]
})
export class DirectivesModule {
}
