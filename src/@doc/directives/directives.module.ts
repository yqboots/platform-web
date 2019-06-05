import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';
import {YqHighlightModule} from '@yq/components';

import {DocsDirectivesIfOnDomComponent} from '@doc/directives/ifOnDom/if-on-dom.component';
import {DocsDirectivesInnerScrollComponent} from '@doc/directives/innerScroll/inner-scroll.component';
import {DocsDirectivesMatSidenavComponent} from '@doc/directives/matSidenav/mat-sidenav.component';

const routes = [
    {
        path: 'if-on-dom',
        component: DocsDirectivesIfOnDomComponent

    },
    {
        path: 'inner-scroll',
        component: DocsDirectivesInnerScrollComponent
    },
    {
        path: 'mat-sidenav',
        component: DocsDirectivesMatSidenavComponent
    }
];

@NgModule({
    declarations: [
        DocsDirectivesIfOnDomComponent,
        DocsDirectivesInnerScrollComponent,
        DocsDirectivesMatSidenavComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        YqSharedModule,
        YqHighlightModule
    ]
})
export class DirectivesModule {
}
