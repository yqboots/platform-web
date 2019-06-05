import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {yqAnimations, YqConfigService} from '@yq/core';

@Component({
    selector: 'lock',
    templateUrl: './lock.component.html',
    styleUrls: ['./lock.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: yqAnimations
})
export class LockComponent implements OnInit {
    lockForm: FormGroup;

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
        this.lockForm = this._formBuilder.group({
            username: [
                {
                    value: 'Katherine',
                    disabled: true
                }, Validators.required
            ],
            password: ['', Validators.required]
        });
    }
}
