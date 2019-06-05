import {Component} from '@angular/core';

import {YqSidebarService} from '@yq/components/sidebar/sidebar.service';

@Component({
  selector: 'simple-left-sidebar-2',
  templateUrl: './left-sidebar-2.component.html',
  styleUrls: ['./left-sidebar-2.component.scss']
})
export class SimpleLeftSidebar2Component {
  /**
   * Constructor
   *
   * @param {YqSidebarService} _yqSidebarService
   */
  constructor(
    private _yqSidebarService: YqSidebarService
  ) {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._yqSidebarService.getSidebar(name).toggleOpen();
  }
}
