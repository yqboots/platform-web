import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/core';

import {InvoiceService} from 'app/main/pages/invoices/invoice.service';
import {InvoiceCompactComponent} from 'app/main/pages/invoices/compact/compact.component';

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
