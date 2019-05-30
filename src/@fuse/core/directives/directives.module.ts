import {NgModule} from '@angular/core';

import {FuseIfOnDomDirective} from './fuse-if-on-dom/fuse-if-on-dom.directive';
import {FuseInnerScrollDirective} from './fuse-inner-scroll/fuse-inner-scroll.directive';
import {
    FuseMatSidenavHelperDirective,
    FuseMatSidenavTogglerDirective
} from './fuse-mat-sidenav/fuse-mat-sidenav.directive';

@NgModule({
    declarations: [
        FuseIfOnDomDirective,
        FuseInnerScrollDirective,
        FuseMatSidenavHelperDirective,
        FuseMatSidenavTogglerDirective
    ],
    imports: [],
    exports: [
        FuseIfOnDomDirective,
        FuseInnerScrollDirective,
        FuseMatSidenavHelperDirective,
        FuseMatSidenavTogglerDirective
    ]
})
export class FuseDirectivesModule {
}
