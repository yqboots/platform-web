import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';

import {DocsChangelogComponent} from '@doc/changelog/changelog.component';

const routes: Routes = [
    {
        path: 'changelog',
        component: DocsChangelogComponent
    },
    {
        path: 'getting-started',
        loadChildren: () => import('@doc/getting-started/getting-started.module').then(m => m.GettingStartedModule)
    },
    {
        path: 'developer-guide',
        loadChildren: () => import('@doc/developer-guide/developer-guide.module').then(m => m.DeveloperGuideModule)
    },
    {
        path: 'components',
        loadChildren: () => import('@doc/components/components.module').then(m => m.ComponentsModule)
    },
    {
        path: 'components-third-party',
        loadChildren: () => import('@doc/components-third-party/components-third-party.module').then(m => m.ComponentsThirdPartyModule)
    },
    {
        path: 'directives',
        loadChildren: () => import('@doc/directives/directives.module').then(m => m.DirectivesModule)
    },
    {
        path: 'services',
        loadChildren: () => import('@doc/services/services.module').then(m => m.ServicesModule)
    }
];

@NgModule({
    declarations: [
        DocsChangelogComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatIconModule,

        YqSharedModule
    ]
})
export class DocumentationModule {
}
