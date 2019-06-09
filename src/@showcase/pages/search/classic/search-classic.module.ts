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

import {SearchClassicComponent} from '@showcase/pages/search/classic/search-classic.component';
import {SearchClassicService} from '@showcase/pages/search/classic/search-classic.service';
import {SearchFakeDbService} from '../search-fake-db.service';

import {environment} from 'environments/environment';

const routes = [
  {
    path: 'search/classic',
    component: SearchClassicComponent,
    resolve: {
      search: SearchClassicService
    }
  }
];

@NgModule({
  declarations: [
    SearchClassicComponent,
  ],
  imports: [
    HttpClientModule,

    RouterModule.forChild(routes),

    !environment.production ? InMemoryWebApiModule.forFeature(SearchFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }) : [],

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,

    YqSharedModule
  ],
  providers: [
    SearchClassicService
  ]
})
export class SearchClassicModule {
}
