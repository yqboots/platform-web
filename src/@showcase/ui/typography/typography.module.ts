import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';

import {FuseSharedModule} from '@fuse/core';
import {FuseHighlightModule} from '@fuse/components';

import {TypographyComponent} from '@showcase/ui/typography/typography.component';
import {TypographyHeadingsComponent} from '@showcase/ui/typography/tabs/headings/headings.component';
import {TypographyInlineTextElementsComponent} from '@showcase/ui/typography/tabs/inline-text-elements/inline-text-elements.component';
import {TypographyBlockquotesListsComponent} from '@showcase/ui/typography/tabs/blockquotes-lists/blockquotes-lists.component';
import {TypographyMessageBoxesComponent} from '@showcase/ui/typography/tabs/message-boxes/message-boxes.component';
import {TypographyHelpersComponent} from '@showcase/ui/typography/tabs/helpers/helpers.component';

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

        FuseSharedModule,
        FuseHighlightModule
    ]
})
export class UITypographyModule {
}
