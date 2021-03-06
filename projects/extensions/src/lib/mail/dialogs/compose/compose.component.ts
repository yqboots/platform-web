import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'mail-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MailComposeDialogComponent {
  showExtraToFields: boolean;
  composeForm: FormGroup;

  constructor(public matDialogRef: MatDialogRef<MailComposeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private _data: any) {
    // Set the defaults
    this.composeForm = this.createComposeForm();
    this.showExtraToFields = false;
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Create compose form
   */
  createComposeForm(): FormGroup {
    return new FormGroup({
      from: new FormControl({
        value: 'johndoe@creapond.com',
        disabled: true
      }),
      to: new FormControl(''),
      cc: new FormControl(''),
      bcc: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl('')
    });
  }

  /**
   * Toggle extra to fields
   */
  toggleExtraToFields(): void {
    this.showExtraToFields = !this.showExtraToFields;
  }
}
