import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

import {FuseSharedModule} from '@fuse/core';

import {FaqService} from '@showcase/pages/faq/faq.service';
import {FaqComponent} from '@showcase/pages/faq/faq.component';

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
        RouterModule.forChild(routes),

        MatExpansionModule,
        MatIconModule,

        FuseSharedModule
    ],
    providers: [
        FaqService
    ]
})
export class FaqModule {
}
