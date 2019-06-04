import {NgModule} from '@angular/core';

import {IfOnDomDirective} from './if-on-dom/if-on-dom.directive';
import {InnerScrollDirective} from './inner-scroll/inner-scroll.directive';
import {
    MatSidenavHelperDirective,
    FuseMatSidenavTogglerDirective
} from './mat-sidenav/mat-sidenav.directive';

@NgModule({
    declarations: [
        IfOnDomDirective,
        InnerScrollDirective,
        MatSidenavHelperDirective,
        FuseMatSidenavTogglerDirective
    ],
    imports: [],
    exports: [
        IfOnDomDirective,
        InnerScrollDirective,
        MatSidenavHelperDirective,
        FuseMatSidenavTogglerDirective
    ]
})
export class FuseDirectivesModule {
}
