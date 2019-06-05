import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

import {YqSharedModule} from '@yq/core';

import {FaqService} from '@showcase/pages/faq/faq.service';
import {FaqComponent} from '@showcase/pages/faq/faq.component';

const routes = [
  {
    path: 'faq',
    component: FaqComponent,
    resolve: {
      faq: FaqService
    }
  }
];

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatExpansionModule,
    MatIconModule,

    YqSharedModule
  ],
  providers: [
    FaqService
  ]
})
export class FaqModule {
}
