import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/core';

import {InvoiceService} from '@showcase/pages/invoices/invoice.service';
import {InvoiceModernComponent} from '@showcase/pages/invoices/modern/modern.component';

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
        RouterModule.forChild(routes),

        FuseSharedModule
    ],
    providers: [
        InvoiceService
    ]
})
export class InvoiceModernModule {
}
