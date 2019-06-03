import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import {FuseSharedModule} from '@fuse/core';
import {FuseHighlightModule} from '@fuse/components';

import {DocsGettingStartedIntroductionComponent} from '@doc/getting-started/introduction/introduction.component';
import {DocsGettingStartedInstallationComponent} from '@doc/getting-started/installation/installation.component';

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

        FuseSharedModule,
        FuseHighlightModule
    ]
})
export class GettingStartedModule {
}
