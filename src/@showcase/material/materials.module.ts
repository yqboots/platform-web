import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {YqSharedModule} from '@yq/core';
import {YqHighlightModule, YqWidgetModule} from '@yq/components';

import {MaterialModule} from '@showcase/material/material.module';
import {EXAMPLE_LIST} from '@showcase/material/example-components';
import {MaterialsComponent} from '@showcase/material/materials.component';
import {ExampleViewerComponent} from '@showcase/material/example-viewer/example-viewer';

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

