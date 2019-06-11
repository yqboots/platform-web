import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {YqSharedModule} from '@yq/core';
import {YqHighlightModule, YqWidgetModule} from '@yq/components';

import {MaterialModule} from './material.module';
import {EXAMPLE_LIST} from './example-components';
import {MaterialsComponent} from './materials.component';
import {ExampleViewerComponent} from './example-viewer/example-viewer';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: ':id',
        component: MaterialsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    [...EXAMPLE_LIST],
    MaterialsComponent,
    ExampleViewerComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MaterialModule,

    YqSharedModule,
    YqHighlightModule,
    YqWidgetModule
  ],
  entryComponents: EXAMPLE_LIST,
})
export class MaterialsModule {
}

