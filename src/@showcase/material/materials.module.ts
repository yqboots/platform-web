import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FuseSharedModule} from '@fuse/core';
import {FuseHighlightModule, FuseWidgetModule} from '@fuse/components';

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

        FuseSharedModule,
        FuseHighlightModule,
        FuseWidgetModule
    ],
    entryComponents: EXAMPLE_LIST,
})
export class MaterialsModule {
}

