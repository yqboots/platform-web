import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';

import {InvoiceService} from '@showcase/pages/invoices/invoice.service';
import {InvoiceModernComponent} from '@showcase/pages/invoices/modern/modern.component';
import {InvoicesFakeDbService} from '../invoices-fake-db.service';

import {environment} from 'environments/environment';

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

    !environment.production ? InMemoryWebApiModule.forFeature(InvoicesFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }) : [],

    YqSharedModule
  ],
  providers: [
    InvoiceService
  ]
})
export class InvoiceModernModule {
}
