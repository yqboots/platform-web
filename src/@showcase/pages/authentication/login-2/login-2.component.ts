import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {yqAnimations, YqConfigService} from '@yq/core';

@Component({
  selector: 'login-2',
  templateUrl: './login-2.component.html',
  styleUrls: ['./login-2.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: yqAnimations
})
export class Login2Component implements OnInit {
  loginForm: FormGroup;

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
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
}
