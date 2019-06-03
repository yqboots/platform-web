import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {FuseModule, FuseSharedModule} from '@fuse/core';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule} from '@fuse/components';

import {fuseConfig} from 'app/fuse-config';

import {FakeDbService} from 'app/fake-db/fake-db.service';
import {AppComponent} from 'app/app.component';
import {AppStoreModule} from 'app/store/store.module';
import {LayoutModule} from 'app/layout/layout.module';

const appRoutes: Routes = [
    {
        path: 'apps',
        loadChildren: () => import('@fuse/apps/apps.module').then(m => m.AppsModule)
    },
    {
        path: 'pages',
        loadChildren: () => import('@showcase/pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: 'ui',
        loadChildren: () => import('@showcase/ui/ui.module').then(m => m.UIModule)
    },
    {
        path: 'documentation',
        loadChildren: () => import('@doc/documentation.module').then(m => m.DocumentationModule)
    },
    {
        path: 'angular-material-elements',
        loadChildren: () => import('@showcase/angular-material-elements/angular-material-elements.module').then(m => m.AngularMaterialElementsModule)
    },
    {
        path: '**',
        redirectTo: 'apps/dashboards/analytics'
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
