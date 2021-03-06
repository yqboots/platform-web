import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {YqSharedModule} from '@yq/core';
import {YqDemoModule, YqHighlightModule} from '@yq/components';

import {CardsComponent} from './cards.component';

const routes: Routes = [
  {
    path: 'cards',
    component: CardsComponent
  }
];

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,

    NgxChartsModule,

    YqSharedModule,
    YqDemoModule,
    YqHighlightModule,
  ]
})
export class UICardsModule {
}
