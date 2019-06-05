import {NgModule} from '@angular/core';

import {YqWidgetComponent} from './widget.component';
import {YqWidgetToggleDirective} from './widget-toggle.directive';

@NgModule({
    declarations: [
        YqWidgetComponent,
        YqWidgetToggleDirective
    ],
    exports: [
        YqWidgetComponent,
        YqWidgetToggleDirective
    ],
})
export class YqWidgetModule {
}
