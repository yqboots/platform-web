import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {YqSharedModule} from '@yq/core';

import {ContentComponent} from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports: [
        RouterModule,
        YqSharedModule
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule {
}
