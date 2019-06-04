import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

import {TranslateModule} from '@ngx-translate/core';

import {FuseNavigationComponent} from './navigation.component';
import {FuseNavVerticalItemComponent} from './vertical/item/item.component';
import {FuseNavVerticalCollapsibleComponent} from './vertical/collapsible/collapsible.component';
import {FuseNavVerticalGroupComponent} from './vertical/group/group.component';
import {FuseNavHorizontalItemComponent} from './horizontal/item/item.component';
import {FuseNavHorizontalCollapsibleComponent} from './horizontal/collapsible/collapsible.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports: [
        FuseNavigationComponent
    ],
    declarations: [
        FuseNavigationComponent,
        FuseNavVerticalGroupComponent,
        FuseNavVerticalItemComponent,
        FuseNavVerticalCollapsibleComponent,
        FuseNavHorizontalItemComponent,
        FuseNavHorizontalCollapsibleComponent
    ]
})
export class FuseNavigationModule {
}
