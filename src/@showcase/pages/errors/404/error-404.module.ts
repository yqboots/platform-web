import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';

import {FuseSharedModule} from '@fuse/core';

import {Error404Component} from '@showcase/pages/errors/404/error-404.component';

const routes = [
    {
        path: 'errors/error-404',
        component: Error404Component
    }
];

@NgModule({
    declarations: [
        Error404Component
    ],
    imports: [
        RouterModule.forChild(routes),

        MatIconModule,

        FuseSharedModule
    ]
})
export class Error404Module {
}