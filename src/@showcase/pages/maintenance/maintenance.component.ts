import {Component, ViewEncapsulation} from '@angular/core';

import {yqAnimations, YqConfigService} from '@yq/core';

@Component({
  selector: 'maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: yqAnimations
})
export class MaintenanceComponent {
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
