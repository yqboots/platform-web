import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

import {TranslateModule} from '@ngx-translate/core';

import {YqNavigationComponent} from './navigation.component';
import {YqNavVerticalItemComponent} from './vertical/item/item.component';
import {YqNavVerticalCollapsibleComponent} from './vertical/collapsible/collapsible.component';
import {YqNavVerticalGroupComponent} from './vertical/group/group.component';
import {YqNavHorizontalItemComponent} from './horizontal/item/item.component';
import {YqNavHorizontalCollapsibleComponent} from './horizontal/collapsible/collapsible.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports: [
        YqNavigationComponent
    ],
    declarations: [
        YqNavigationComponent,
        YqNavVerticalGroupComponent,
        YqNavVerticalItemComponent,
        YqNavVerticalCollapsibleComponent,
        YqNavHorizontalItemComponent,
        YqNavHorizontalCollapsibleComponent
    ]
})
export class YqNavigationModule {
}
