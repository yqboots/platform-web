import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';

import {SearchModernComponent} from '../modern/search-modern.component';
import {SearchModernService} from '../modern/search-modern.service';
import {SearchFakeDbService} from '../search-fake-db.service';

const routes = [
  {
    path: 'search/modern',
    component: SearchModernComponent,
    resolve: {
      search: SearchModernService
    }
  }
];

@NgModule({
  declarations: [
    SearchModernComponent,
  ],
  imports: [
    HttpClientModule,

    RouterModule.forChild(routes),

    InMemoryWebApiModule.forFeature(SearchFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,

    YqSharedModule
  ],
  providers: [
    SearchModernService
  ]
})
export class SearchModernModule {
}
