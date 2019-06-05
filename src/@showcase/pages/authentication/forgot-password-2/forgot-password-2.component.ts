import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {yqAnimations, YqConfigService} from '@yq/core';

@Component({
  selector: 'forgot-password-2',
  templateUrl: './forgot-password-2.component.html',
  styleUrls: ['./forgot-password-2.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: yqAnimations
})
export class ForgotPassword2Component implements OnInit {
  forgotPasswordForm: FormGroup;

  /**
   * Constructor
   *
   * @param {YqConfigService} _yqConfigService
   * @param {FormBuilder} _formBuilder
   */
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
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.forgotPasswordForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
