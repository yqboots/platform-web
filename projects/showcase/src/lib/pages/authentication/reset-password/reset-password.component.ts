import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {yqAnimations, YqConfigService} from '@yq/core';

@Component({
  selector: 'reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: yqAnimations
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  resetPasswordForm: FormGroup;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _yqConfigService: YqConfigService,
    private _formBuilder: FormBuilder
  ) {
    // Configure the layout
    this._yqConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.resetPasswordForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, confirmPasswordValidator]]
    });

    // Update the validity of the 'passwordConfirm' field
    // when the 'password' field changes
    this.resetPasswordForm.get('password').valueChanges
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this.resetPasswordForm.get('passwordConfirm').updateValueAndValidity();
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}

/**
 * Confirm password validator
 */
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  if (!control.parent || !control) {
    return null;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('passwordConfirm');

  if (!password || !passwordConfirm) {
    return null;
  }

  if (passwordConfirm.value === '') {
    return null;
  }

  if (password.value === passwordConfirm.value) {
    return null;
  }

  return {passwordsNotMatching: true};
};