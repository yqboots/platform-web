import {NgModule} from '@angular/core';

import {IfOnDomDirective} from './if-on-dom/if-on-dom.directive';
import {InnerScrollDirective} from './inner-scroll/inner-scroll.directive';
import {
    MatSidenavHelperDirective,
    YqMatSidenavTogglerDirective
} from './mat-sidenav/mat-sidenav.directive';

@NgModule({
    declarations: [
        IfOnDomDirective,
        InnerScrollDirective,
        MatSidenavHelperDirective,
        YqMatSidenavTogglerDirective
    ],
    imports: [],
    exports: [
        IfOnDomDirective,
        InnerScrollDirective,
        MatSidenavHelperDirective,
        YqMatSidenavTogglerDirective
    ]
})
export class YqDirectivesModule {
}
