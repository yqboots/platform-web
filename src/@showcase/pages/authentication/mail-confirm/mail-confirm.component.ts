import {Component, ViewEncapsulation} from '@angular/core';

import {yqAnimations, YqConfigService} from '@yq/core';

@Component({
    selector: 'mail-confirm',
    templateUrl: './mail-confirm.component.html',
    styleUrls: ['./mail-confirm.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: yqAnimations
})
export class MailConfirmComponent {
    /**
     * Constructor
     *
     * @param {YqConfigService} _yqConfigService
     */
    constructor(
        private _yqConfigService: YqConfigService
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
}
