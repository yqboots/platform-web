import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {FuseSharedModule} from '@fuse/core';
import {FuseHighlightModule} from '@fuse/components';

import {DocsDirectivesFuseIfOnDomComponent} from '@doc/directives/fuseIfOnDom/fuse-if-on-dom.component';
import {DocsDirectivesFuseInnerScrollComponent} from '@doc/directives/fuseInnerScroll/fuse-inner-scroll.component';
import {DocsDirectivesFuseMatSidenavComponent} from '@doc/directives/fuseMatSidenav/fuse-mat-sidenav.component';
import {DocsDirectivesFusePerfectScrollbarComponent} from '@doc/directives/fusePerfectScrollbar/fuse-perfect-scrollbar.component';

const routes = [
    {
        path: 'fuse-if-on-dom',
        component: DocsDirectivesFuseIfOnDomComponent
    },
    {
        path: 'fuse-inner-scroll',
        component: DocsDirectivesFuseInnerScrollComponent
    },
    {
        path: 'fuse-mat-sidenav',
        component: DocsDirectivesFuseMatSidenavComponent
    },
    {
        path: 'fuse-perfect-scrollbar',
        component: DocsDirectivesFusePerfectScrollbarComponent
    }
];

@NgModule({
    declarations: [
        DocsDirectivesFuseIfOnDomComponent,
        DocsDirectivesFuseInnerScrollComponent,
        DocsDirectivesFuseMatSidenavComponent,
        DocsDirectivesFusePerfectScrollbarComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        FuseSharedModule,
        FuseHighlightModule
    ]
})
export class DirectivesModule {
}
