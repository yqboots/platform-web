import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {FuseSharedModule} from '@fuse/core';

import {
    FuseCountdownModule,
    FuseHighlightModule,
    FuseMaterialColorPickerModule,
    FuseWidgetModule
} from '@fuse/components';
import {DocsComponentsCountdownComponent} from '@doc/components/countdown/countdown.component';
import {DocsComponentsHighlightComponent} from '@doc/components/highlight/highlight.component';
import {DocsComponentsMaterialColorPickerComponent} from '@doc/components/material-color-picker/material-color-picker.component';
import {DocsComponentsNavigationComponent} from '@doc/components/navigation/navigation.component';
import {DocsComponentsProgressBarComponent} from '@doc/components/progress-bar/progress-bar.component';
import {DocsComponentsSearchBarComponent} from '@doc/components/search-bar/search-bar.component';
import {DocsComponentsSidebarComponent} from '@doc/components/sidebar/sidebar.component';
import {DocsComponentsShortcutsComponent} from '@doc/components/shortcuts/shortcuts.component';
import {DocsComponentsWidgetComponent} from '@doc/components/widget/widget.component';

const routes = [
    {
        path: 'countdown',
        component: DocsComponentsCountdownComponent
    },
    {
        path: 'highlight',
        component: DocsComponentsHighlightComponent
    },
    {
        path: 'material-color-picker',
        component: DocsComponentsMaterialColorPickerComponent
    },
    {
        path: 'navigation',
        component: DocsComponentsNavigationComponent
    },
    {
        path: 'progress-bar',
        component: DocsComponentsProgressBarComponent
    },
    {
        path: 'search-bar',
        component: DocsComponentsSearchBarComponent
    },
    {
        path: 'sidebar',
        component: DocsComponentsSidebarComponent
    },
    {
        path: 'shortcuts',
        component: DocsComponentsShortcutsComponent
    },
    {
        path: 'widget',
        component: DocsComponentsWidgetComponent
    }
];

@NgModule({
    declarations: [
        DocsComponentsCountdownComponent,
        DocsComponentsHighlightComponent,
        DocsComponentsMaterialColorPickerComponent,
        DocsComponentsNavigationComponent,
        DocsComponentsProgressBarComponent,
        DocsComponentsSearchBarComponent,
        DocsComponentsSidebarComponent,
        DocsComponentsShortcutsComponent,
        DocsComponentsWidgetComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatIconModule,

        FuseSharedModule,

        FuseCountdownModule,
        FuseHighlightModule,
        FuseMaterialColorPickerModule,
        FuseWidgetModule
    ]
})
export class ComponentsModule {
}
