import {NgModule} from '@angular/core';

import {UICardsModule} from '@showcase/ui/cards/cards.module';
import {UIFormsModule} from '@showcase/ui/forms/forms.module';
import {UIIconsModule} from '@showcase/ui/icons/icons.module';
import {UITypographyModule} from '@showcase/ui/typography/typography.module';
import {UIHelperClassesModule} from '@showcase/ui/helper-classes/helper-classes.module';
import {UIPageLayoutsModule} from '@showcase/ui/page-layouts/page-layouts.module';
import {UIColorsModule} from '@showcase/ui/colors/colors.module';

@NgModule({
  imports: [
    UICardsModule,
    UIFormsModule,
    UIIconsModule,
    UITypographyModule,
    UIHelperClassesModule,
    UIPageLayoutsModule,
    UIColorsModule
  ]
})
export class UIModule {
}
