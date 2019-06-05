import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'yq-nav-horizontal-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class YqNavHorizontalItemComponent {
  @HostBinding('class')
  classes = 'nav-item';

  @Input()
  item: any;

  /**
   * Constructor
   */
  constructor() {

  }
}
