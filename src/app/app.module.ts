import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {YqCoreModule, YqSharedModule} from '@yq/core';
import {YqProgressBarModule, YqSidebarModule, YqThemeOptionsModule} from '@yq/components';

import {appRouteConfigs, appConfig} from 'app/config';

import {FakeDbService} from 'app/fake-db/fake-db.service';
import {AppComponent} from 'app/app.component';
import {AppStoreModule} from 'app/store/store.module';
import {LayoutModule} from 'app/layout/layout.module';

import {environment} from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRouteConfigs),

    TranslateModule.forRoot(),
    !environment.production ? InMemoryWebApiModule.forRoot(FakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }) : [],

    // Material moment date module
    MatMomentDateModule,

    // Material
    MatButtonModule,
    MatIconModule,

    // YQBoots modules
    YqCoreModule.forRoot(appConfig),
    YqProgressBarModule,
    YqSharedModule,
    YqSidebarModule,
    YqThemeOptionsModule,

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
