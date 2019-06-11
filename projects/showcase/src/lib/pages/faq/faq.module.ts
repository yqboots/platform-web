import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';

import {FaqService} from './faq.service';
import {FaqComponent} from './faq.component';
import {FaqFakeDbService} from './faq-fake-db.service';

const routes = [
  {
    path: 'faq',
    component: FaqComponent,
    resolve: {
      faq: FaqService
    }
  }
];

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forChild(routes),

    InMemoryWebApiModule.forFeature(FaqFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),

    MatExpansionModule,
    MatIconModule,

    YqSharedModule
  ],
  providers: [
    FaqService
  ]
})
export class FaqModule {
}
