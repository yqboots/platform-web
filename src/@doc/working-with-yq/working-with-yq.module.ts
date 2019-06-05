import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';
import {YqHighlightModule} from '@yq/components';

import {DocsWorkingWithYqServerComponent} from '@doc/working-with-yq/server/server.component';
import {DocsWorkingWithYqProductionComponent} from '@doc/working-with-yq/production/production.component';
import {DocsWorkingWithYqDirectoryStructureComponent} from '@doc/working-with-yq/directory-structure/directory-structure.component';
import {DocsWorkingWithYqUpdatingYqComponent} from '@doc/working-with-yq/updating-yq/updating-yq.component';
import {DocsWorkingWithYqMultiLanguageComponent} from '@doc/working-with-yq/multi-language/multi-language.component';
import {DocsWorkingWithYqMaterialThemingComponent} from '@doc/working-with-yq/material-theming/material-theming.component';
import {DocsWorkingWithYqThemeLayoutsComponent} from '@doc/working-with-yq/theme-layouts/theme-layouts.component';
import {DocsWorkingWithYqPageLayoutsComponent} from '@doc/working-with-yq/page-layouts/page-layouts.component';

const routes = [
    {
        path: 'server',
        component: DocsWorkingWithYqServerComponent
    },
    {
        path: 'production',
        component: DocsWorkingWithYqProductionComponent
    },
    {
        path: 'directory-structure',
        component: DocsWorkingWithYqDirectoryStructureComponent
    },
    {
        path: 'updating-yq',
        component: DocsWorkingWithYqUpdatingYqComponent
    },
    {
        path: 'multi-language',
        component: DocsWorkingWithYqMultiLanguageComponent
    },
    {
        path: 'material-theming',
        component: DocsWorkingWithYqMaterialThemingComponent
    },
    {
        path: 'theme-layouts',
        component: DocsWorkingWithYqThemeLayoutsComponent
    },
    {
        path: 'page-layouts',
        component: DocsWorkingWithYqPageLayoutsComponent
    }
];

@NgModule({
    declarations: [
        DocsWorkingWithYqServerComponent,
        DocsWorkingWithYqProductionComponent,
        DocsWorkingWithYqDirectoryStructureComponent,
        DocsWorkingWithYqUpdatingYqComponent,
        DocsWorkingWithYqMaterialThemingComponent,
        DocsWorkingWithYqMultiLanguageComponent,
        DocsWorkingWithYqThemeLayoutsComponent,
        DocsWorkingWithYqPageLayoutsComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        YqSharedModule,
        YqHighlightModule
    ]
})
export class WorkingWithYqModule {
}
