import {Component, ViewEncapsulation} from '@angular/core';

import {yqAnimations} from '@yq/core';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: yqAnimations
})
export class ProfileComponent {
    /**
     * Constructor
     */
    constructor() {

    }
}
