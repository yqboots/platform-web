import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

import {YqSharedModule} from '@yq/core';
import {YqSidebarModule, YqThemeOptionsModule} from '@yq/components';

import {ChatPanelModule} from 'app/layout/components/chat-panel/chat-panel.module';
import {ContentModule} from 'app/layout/components/content/content.module';
import {FooterModule} from 'app/layout/components/footer/footer.module';
import {NavbarModule} from 'app/layout/components/navbar/navbar.module';
import {QuickPanelModule} from 'app/layout/components/quick-panel/quick-panel.module';
import {ToolbarModule} from 'app/layout/components/toolbar/toolbar.module';

import {HorizontalLayout1Component} from 'app/layout/horizontal/layout-1/layout-1.component';

@NgModule({
    declarations: [
        HorizontalLayout1Component
    ],
    imports: [
        MatSidenavModule,

        YqSharedModule,
        YqSidebarModule,
        YqThemeOptionsModule,

        ChatPanelModule,
        ContentModule,
        FooterModule,
        NavbarModule,
        QuickPanelModule,
        ToolbarModule
    ],
    exports: [
        HorizontalLayout1Component
    ]
})
export class HorizontalLayout1Module {
}
