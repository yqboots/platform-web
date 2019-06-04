import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/core';

import {Error500Component} from '@showcase/pages/errors/500/error-500.component';

const routes = [
    {
        path: 'errors/error-500',
        component: Error500Component
    }
];

@NgModule({
    declarations: [
        Error500Component
    ],
    imports: [
        RouterModule.forChild(routes),

        FuseSharedModule
    ]
})
export class Error500Module {
}