import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/core';

import {InvoiceService} from '@showcase/pages/invoices/invoice.service';
import {InvoiceCompactComponent} from '@showcase/pages/invoices/compact/compact.component';

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
        RouterModule.forChild(routes),

        FuseSharedModule
    ],
    providers: [
        InvoiceService
    ]
})
export class InvoiceCompactModule {
}
