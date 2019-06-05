import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

import {YqDemoContentComponent} from './demo-content/demo-content.component';
import {YqDemoSidebarComponent} from './demo-sidebar/demo-sidebar.component';

@NgModule({
    declarations: [
        YqDemoContentComponent,
        YqDemoSidebarComponent
    ],
    imports: [
        RouterModule,

        MatDividerModule,
        MatListModule
    ],
    exports: [
        YqDemoContentComponent,
        YqDemoSidebarComponent
    ]
})
export class YqDemoModule {
}
