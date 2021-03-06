import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

import {YqSharedModule} from '@yq/core';
import {YqHighlightModule} from '@yq/components';

import {TypographyComponent} from './typography.component';
import {TypographyHeadingsComponent} from './tabs/headings/headings.component';
import {TypographyInlineTextElementsComponent} from './tabs/inline-text-elements/inline-text-elements.component';
import {TypographyBlockquotesListsComponent} from './tabs/blockquotes-lists/blockquotes-lists.component';
import {TypographyMessageBoxesComponent} from './tabs/message-boxes/message-boxes.component';
import {TypographyHelpersComponent} from './tabs/helpers/helpers.component';

const routes: Routes = [
  {
    path: 'typography',
    component: TypographyComponent
  }
];

@NgModule({
  declarations: [
    TypographyComponent,
    TypographyHeadingsComponent,
    TypographyInlineTextElementsComponent,
    TypographyBlockquotesListsComponent,
    TypographyMessageBoxesComponent,
    TypographyHelpersComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatIconModule,
    MatTabsModule,

    YqSharedModule,
    YqHighlightModule
  ]
})
export class UITypographyModule {
}
