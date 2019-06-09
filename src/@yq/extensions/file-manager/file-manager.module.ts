import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';
import {YqSidebarModule} from '@yq/components';

import {FileManagerService} from '@yq/extensions/file-manager/file-manager.service';
import {FileManagerComponent} from '@yq/extensions/file-manager/file-manager.component';
import {FileManagerDetailsSidebarComponent} from '@yq/extensions/file-manager/sidebars/details/details.component';
import {FileManagerFileListComponent} from '@yq/extensions/file-manager/file-list/file-list.component';
import {FileManagerMainSidebarComponent} from '@yq/extensions/file-manager/sidebars/main/main.component';
import {FileManagerFakeDbService} from './file-manager-fake-db.service';

import {environment} from 'environments/environment';

const routes: Routes = [
  {
    path: '**',
    component: FileManagerComponent,
    children: [],
    resolve: {
      files: FileManagerService
    }
  }
];

@NgModule({
  declarations: [
    FileManagerComponent,
    FileManagerFileListComponent,
    FileManagerMainSidebarComponent,
    FileManagerDetailsSidebarComponent
  ],
  imports: [
    HttpClientModule,

    RouterModule.forChild(routes),

    !environment.production ? InMemoryWebApiModule.forFeature(FileManagerFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }) : [],

    MatButtonModule,
    MatIconModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatTableModule,

    YqSharedModule,
    YqSidebarModule
  ],
  providers: [
    FileManagerService
  ]
})
export class FileManagerModule {
}
