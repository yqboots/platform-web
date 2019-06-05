import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {YqSearchBarComponent} from './search-bar.component';

@NgModule({
    declarations: [
        YqSearchBarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

        MatButtonModule,
        MatIconModule
    ],
    exports: [
        YqSearchBarComponent
    ]
})
export class YqSearchBarModule {
}
