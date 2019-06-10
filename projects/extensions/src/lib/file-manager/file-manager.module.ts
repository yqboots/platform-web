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

import {FileManagerService} from './file-manager.service';
import {FileManagerComponent} from './file-manager.component';
import {FileManagerDetailsSidebarComponent} from './sidebars/details/details.component';
import {FileManagerFileListComponent} from './file-list/file-list.component';
import {FileManagerMainSidebarComponent} from './sidebars/main/main.component';
import {FileManagerFakeDbService} from './file-manager-fake-db.service';

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

    InMemoryWebApiModule.forFeature(FileManagerFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),

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
