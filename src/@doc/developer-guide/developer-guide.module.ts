import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';
import {YqHighlightModule} from '@yq/components';

import {DocsWorkingWithYqServerComponent} from '@doc/developer-guide/server/server.component';
import {DocsWorkingWithYqProductionComponent} from '@doc/developer-guide/production/production.component';
import {DocsWorkingWithYqDirectoryStructureComponent} from '@doc/developer-guide/directory-structure/directory-structure.component';
import {DocsWorkingWithYqUpdatingYqComponent} from '@doc/developer-guide/updating-yq/updating-yq.component';
import {DocsWorkingWithYqMultiLanguageComponent} from '@doc/developer-guide/multi-language/multi-language.component';
import {DocsWorkingWithYqMaterialThemingComponent} from '@doc/developer-guide/material-theming/material-theming.component';
import {DocsWorkingWithYqThemeLayoutsComponent} from '@doc/developer-guide/theme-layouts/theme-layouts.component';
import {DocsWorkingWithYqPageLayoutsComponent} from '@doc/developer-guide/page-layouts/page-layouts.component';

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
export class DeveloperGuideModule {
}
