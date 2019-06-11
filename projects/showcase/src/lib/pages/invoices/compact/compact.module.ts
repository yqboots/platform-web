import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';

import {InvoiceService} from '../invoice.service';
import {InvoiceCompactComponent} from '../compact/compact.component';
import {InvoicesFakeDbService} from '../invoices-fake-db.service';

const routes = [
  {
    path: 'invoices/compact',
    component: InvoiceCompactComponent,
    resolve: {
      search: InvoiceService
    }
  }
];

@NgModule({
  declarations: [
    InvoiceCompactComponent
  ],
  imports: [
    HttpClientModule,

    RouterModule.forChild(routes),

    InMemoryWebApiModule.forFeature(InvoicesFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),

    YqSharedModule
  ],
  providers: [
    InvoiceService
  ]
})
export class InvoiceCompactModule {
}
