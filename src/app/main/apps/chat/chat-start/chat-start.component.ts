import {Component, ViewEncapsulation} from '@angular/core';

import {fuseAnimations} from '@fuse/core';

@Component({
    selector: 'chat-start',
    templateUrl: './chat-start.component.html',
    styleUrls: ['./chat-start.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ChatStartComponent {
    constructor() {
    }
}
