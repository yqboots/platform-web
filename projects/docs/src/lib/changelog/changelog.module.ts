import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';
import {YqHighlightModule} from '@yq/components';

import {DocsChangelogComponent} from './changelog.component';

const routes = [
  {
    path: '',
    component: DocsChangelogComponent
  }
];

@NgModule({
  declarations: [
    DocsChangelogComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatIconModule,

    YqSharedModule,
    YqHighlightModule
  ]
})
export class ChangelogModule {
}
