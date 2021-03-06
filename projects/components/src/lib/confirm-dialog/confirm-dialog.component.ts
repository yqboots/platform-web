import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'yq-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class YqConfirmDialogComponent {
  public confirmMessage: string;

  constructor(public dialogRef: MatDialogRef<YqConfirmDialogComponent>) {
  }
}
