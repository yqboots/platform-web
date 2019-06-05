import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTableModule} from '@angular/material/table';

import {YqSharedModule} from '@yq/core';
import {YqSidebarModule} from '@yq/components';

import {FileManagerService} from '@yq/extensions/file-manager/file-manager.service';
import {FileManagerComponent} from '@yq/extensions/file-manager/file-manager.component';
import {FileManagerDetailsSidebarComponent} from '@yq/extensions/file-manager/sidebars/details/details.component';
import {FileManagerFileListComponent} from '@yq/extensions/file-manager/file-list/file-list.component';
import {FileManagerMainSidebarComponent} from '@yq/extensions/file-manager/sidebars/main/main.component';

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
    RouterModule.forChild(routes),

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
