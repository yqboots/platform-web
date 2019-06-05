import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

import {YqSharedModule} from '@yq/core';
import {YqHighlightModule} from '@yq/components';

import {HelperClassesComponent} from '@showcase/ui/helper-classes/helper-classes.component';
import {HelperClassesPaddingMarginComponent} from '@showcase/ui/helper-classes/tabs/padding-margin/padding-margin.component';
import {HelperClassesWidthHeightComponent} from '@showcase/ui/helper-classes/tabs/width-height/width-height.component';

const routes: Routes = [
    {
        path: 'helper-classes',
        component: HelperClassesComponent
    }
];

@NgModule({
    declarations: [
        HelperClassesComponent,
        HelperClassesPaddingMarginComponent,
        HelperClassesWidthHeightComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        MatIconModule,
        MatTabsModule,

        YqSharedModule,
        YqHighlightModule,
    ],
})
export class UIHelperClassesModule {
}
