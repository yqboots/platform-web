import {Component} from '@angular/core';

import {YqSidebarService} from '@yq/components/sidebar/sidebar.service';

@Component({
  selector: 'carded-right-sidebar-tabbed-2',
  templateUrl: './right-sidebar-tabbed-2.component.html',
  styleUrls: ['./right-sidebar-tabbed-2.component.scss']
})
export class CardedRightSidebarTabbed2Component {
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
