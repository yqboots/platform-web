import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {YqSharedModule} from '@yq/core';
import {YqConfirmDialogModule, YqMaterialColorPickerModule} from '@yq/components';

import {BoardResolve, ScrumboardService} from './scrumboard.service';
import {ScrumboardComponent} from './scrumboard.component';
import {ScrumboardBoardComponent} from './board/board.component';
import {ScrumboardBoardListComponent} from './board/list/list.component';
import {ScrumboardBoardCardComponent} from './board/list/card/card.component';
import {ScrumboardBoardEditListNameComponent} from './board/list/edit-list-name/edit-list-name.component';
import {ScrumboardBoardAddCardComponent} from './board/list/add-card/add-card.component';
import {ScrumboardBoardAddListComponent} from './board/add-list/add-list.component';
import {ScrumboardCardDialogComponent} from './board/dialogs/card/card.component';
import {ScrumboardLabelSelectorComponent} from './board/dialogs/card/label-selector/label-selector.component';
import {ScrumboardEditBoardNameComponent} from './board/edit-board-name/edit-board-name.component';
import {ScrumboardBoardSettingsSidenavComponent} from './board/sidenavs/settings/settings.component';
import {ScrumboardBoardColorSelectorComponent} from './board/sidenavs/settings/board-color-selector/board-color-selector.component';
import {ScrumboardFakeDbService} from './scrumboard-fake-db.service';

const routes: Routes = [
  {
    path: 'boards',
    component: ScrumboardComponent,
    resolve: {
      scrumboard: ScrumboardService
    }
  },
  {
    path: 'boards/:boardId/:boardUri',
    component: ScrumboardBoardComponent,
    resolve: {
      board: BoardResolve
    }
  },
  {
    path: '**',
    redirectTo: 'boards'
  }
];

@NgModule({
  declarations: [
    ScrumboardComponent,
    ScrumboardBoardComponent,
    ScrumboardBoardListComponent,
    ScrumboardBoardCardComponent,
    ScrumboardBoardEditListNameComponent,
    ScrumboardBoardAddCardComponent,
    ScrumboardBoardAddListComponent,
    ScrumboardCardDialogComponent,
    ScrumboardLabelSelectorComponent,
    ScrumboardEditBoardNameComponent,
    ScrumboardBoardSettingsSidenavComponent,
    ScrumboardBoardColorSelectorComponent
  ],
  imports: [
    HttpClientModule,

    RouterModule.forChild(routes),

    InMemoryWebApiModule.forFeature(ScrumboardFakeDbService, {
      delay: 0,
      passThruUnknownUrl: true
    }),

    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRippleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,

    NgxDnDModule,

    YqSharedModule,
    YqConfirmDialogModule,
    YqMaterialColorPickerModule
  ],
  providers: [
    ScrumboardService,
    BoardResolve
  ],
  entryComponents: [ScrumboardCardDialogComponent]
})
export class ScrumboardModule {
}
