import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {FuseSharedModule} from '@fuse/core';
import {FuseHighlightModule} from '@fuse/components';

import {DocsWorkingWithFuseServerComponent} from '@doc/working-with-fuse/server/server.component';
import {DocsWorkingWithFuseProductionComponent} from '@doc/working-with-fuse/production/production.component';
import {DocsWorkingWithFuseDirectoryStructureComponent} from '@doc/working-with-fuse/directory-structure/directory-structure.component';
import {DocsWorkingWithFuseUpdatingFuseComponent} from '@doc/working-with-fuse/updating-fuse/updating-fuse.component';
import {DocsWorkingWithFuseMultiLanguageComponent} from '@doc/working-with-fuse/multi-language/multi-language.component';
import {DocsWorkingWithFuseMaterialThemingComponent} from '@doc/working-with-fuse/material-theming/material-theming.component';
import {DocsWorkingWithFuseThemeLayoutsComponent} from '@doc/working-with-fuse/theme-layouts/theme-layouts.component';
import {DocsWorkingWithFusePageLayoutsComponent} from '@doc/working-with-fuse/page-layouts/page-layouts.component';

const routes = [
    {
        path: 'server',
        component: DocsWorkingWithFuseServerComponent
    },
    {
        path: 'production',
        component: DocsWorkingWithFuseProductionComponent
    },
    {
        path: 'directory-structure',
        component: DocsWorkingWithFuseDirectoryStructureComponent
    },
    {
        path: 'updating-fuse',
        component: DocsWorkingWithFuseUpdatingFuseComponent
    },
    {
        path: 'multi-language',
        component: DocsWorkingWithFuseMultiLanguageComponent
    },
    {
        path: 'material-theming',
        component: DocsWorkingWithFuseMaterialThemingComponent
    },
    {
        path: 'theme-layouts',
        component: DocsWorkingWithFuseThemeLayoutsComponent
    },
    {
        path: 'page-layouts',
        component: DocsWorkingWithFusePageLayoutsComponent
    }
];

@NgModule({
    declarations: [
        DocsWorkingWithFuseServerComponent,
        DocsWorkingWithFuseProductionComponent,
        DocsWorkingWithFuseDirectoryStructureComponent,
        DocsWorkingWithFuseUpdatingFuseComponent,
        DocsWorkingWithFuseMaterialThemingComponent,
        DocsWorkingWithFuseMultiLanguageComponent,
        DocsWorkingWithFuseThemeLayoutsComponent,
        DocsWorkingWithFusePageLayoutsComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        FuseSharedModule,
        FuseHighlightModule
    ]
})
export class WorkingWithFuseModule {
}
