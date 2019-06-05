import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import {YqConfirmDialogComponent} from './confirm-dialog.component';

@NgModule({
  declarations: [
    YqConfirmDialogComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [
    YqConfirmDialogComponent
  ],
})
export class YqConfirmDialogModule {
}
