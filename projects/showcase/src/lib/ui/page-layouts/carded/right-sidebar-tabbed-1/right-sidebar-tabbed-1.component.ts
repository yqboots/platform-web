import {Component} from '@angular/core';

import {YqSidebarService} from '@yq/components';

@Component({
  selector: 'carded-right-sidebar-tabbed-1',
  templateUrl: './right-sidebar-tabbed-1.component.html',
  styleUrls: ['./right-sidebar-tabbed-1.component.scss']
})
export class CardedRightSidebarTabbed1Component {
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
