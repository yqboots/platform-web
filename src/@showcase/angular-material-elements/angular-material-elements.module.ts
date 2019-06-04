import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FuseSharedModule} from '@fuse/core';
import {FuseHighlightModule, FuseWidgetModule} from '@fuse/components';

import {MaterialModule} from '@showcase/angular-material-elements/material.module';
import {EXAMPLE_LIST} from '@showcase/angular-material-elements/example-components';
import {AngularMaterialElementsComponent} from '@showcase/angular-material-elements/angular-material-elements.component';
import {ExampleViewerComponent} from '@showcase/angular-material-elements/example-viewer/example-viewer';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: ':id',
                component: AngularMaterialElementsComponent
            }
        ]
    }
];

@NgModule({
    declarations: [
        [...EXAMPLE_LIST],
        AngularMaterialElementsComponent,
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
export class AngularMaterialElementsModule {
}
