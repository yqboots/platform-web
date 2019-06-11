import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';

import {InvoiceService} from '../invoice.service';
import {InvoiceModernComponent} from '../modern/modern.component';
import {InvoicesFakeDbService} from '../invoices-fake-db.service';

const routes = [
  {
    path: 'invoices/modern',
    component: InvoiceModernComponent,
    resolve: {
      search: InvoiceService
    }
  }
];

@NgModule({
  declarations: [
    InvoiceModernComponent
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
export class InvoiceModernModule {
}
