import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';

import {YqPipesModule} from '@yq/core';

import {YqMaterialColorPickerComponent} from './material-color-picker.component';

@NgModule({
  declarations: [
    YqMaterialColorPickerComponent
  ],
  imports: [
    CommonModule,

    FlexLayoutModule,

    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,

    YqPipesModule
  ],
  exports: [
    YqMaterialColorPickerComponent
  ],
})
export class YqMaterialColorPickerModule {
}
