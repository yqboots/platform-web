import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';

const routes: Routes = [
  {
    path: 'materials',
    loadChildren: () => import('@yq/showcase').then(m => m.MaterialsModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('@yq/showcase').then(m => m.PagesModule)
  },
  {
    path: 'ui',
    loadChildren: () => import('@yq/showcase').then(m => m.UIModule)
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
export class ShowcaseModule {
}
