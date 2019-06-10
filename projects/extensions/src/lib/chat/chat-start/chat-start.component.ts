import {Component, ViewEncapsulation} from '@angular/core';

import {yqAnimations} from '@yq/core';

@Component({
  selector: 'chat-start',
  templateUrl: './chat-start.component.html',
  styleUrls: ['./chat-start.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: yqAnimations
})
export class ChatStartComponent {
  constructor() {
  }
}
